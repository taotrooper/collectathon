import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ApiRestService } from "../../api-rest.service";

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-image-edition',
  templateUrl: './image-edition.component.html',
  styleUrls: ['./image-edition.component.scss'],
})
export class ImageEditionComponent implements OnInit {

  @Input('id') id : any;
  @Input('isCreator') isCreator: any;
  imageurl: any = null;
  thumburl: any = null;
  imgserver = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/";
  thumbdir = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/thumb/";
  images: any;

  constructor(private route: ActivatedRoute, public navCtrl: NavController,
      private camera: Camera, private file: File, private http: ApiRestService, private webview: WebView,
      private actionSheetController: ActionSheetController, private toastController: ToastController,
      private storage: Storage, private plt: Platform, private loadingController: LoadingController,
      private ref: ChangeDetectorRef, private filePath: FilePath) { }

  ngOnInit() {
    this.http.findEditionImage(this.id).subscribe(
      (res) => {
        console.log(res['found']);
        if(res['found']==true) {
          console.log("Found!");
          this.imageurl = this.imgserver + res['filename'];
          this.thumburl = this.thumbdir + res['filename'];
        } else {
          console.log(this.id," not found!");
          this.imageurl = null;
          this.thumburl = "../../assets/noimage.jpg";
        }
      },
      (error) =>{
        console.error(error);
      }
    );
    console.log(this.imageurl);
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
 
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Seleccionar fuente",
        buttons: [{
                text: 'Cargar imagen',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Tomar foto',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancelar',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}
 
takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    }); 
}

updateStoredImage(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.images = newEntry;
      this.ref.detectChanges(); // trigger change detection cycle
  });
}

createFileName() {
  var newFileName = this.id + ".jpg";
  return newFileName;
}

copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    this.updateStoredImage(newFileName);
    this.startUpload(this.images);
  }, error => {
      this.presentToast('Error guardando la imagen.');
  });
}

// Inspired by https://golb.hplar.ch/2017/02/Uploading-pictures-from-Ionic-2-to-Spring-Boot.html
 
startUpload(imgEntry) {
  this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
          ( < FileEntry > entry).file(file => this.readFile(file))
      })
      .catch(err => {
          this.presentToast('Error leyendo el fichero.');
      });
}

readFile(file: any) {
  const reader = new FileReader();
  reader.onload = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
          type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
  };
  reader.readAsArrayBuffer(file);
}

async uploadImageData(formData: FormData) {
  const loading = await this.loadingController.create({
      message: 'Subiendo imagen...',
  });
  await loading.present();

  this.http.uploadEditionImage(formData)
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
    .subscribe(res => {
      if (res['success']) {
        this.presentToast('La imagen se subió con éxito.');
        this.http.findEditionImage(this.id);
      } else {
        this.presentToast('Error en la carga al servidor.')
      }
    }
  );
}

}
