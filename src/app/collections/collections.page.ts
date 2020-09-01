import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { ChangeDetectorRef } from '@angular/core';
import { CreateCollectionPage } from '../create-collection/create-collection.page';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
  providers: [ApiRestService],
})
export class CollectionsPage implements OnInit {

  colecciones : any[];
  newCol: any;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
     private route: ActivatedRoute, private router: Router, private alertController: AlertController,
     private changeRef: ChangeDetectorRef) {
    this.getCollections();
  }

  getCollections(){
    this.colecciones = [];
    this.http.getCollections().subscribe(
      (res) => { 
        this.colecciones = res['body'];
        console.log("colecciones: ",this.colecciones);
      },
      (error) =>{
        console.error(error);
      }
    )
    console.log(this.colecciones);
  }

  goToCollection(id: string) {
    console.log('id ', id);
    this.navCtrl.navigateForward("/collection/"+id);
  }

  goToWishlist() {
    this.navCtrl.navigateForward("/wishlist");
  }

  ngOnInit() {
  }

  async goToNewCollection() {
    console.log("Página modal");
    const modal = await this.modalController.create({
      component: CreateCollectionPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.colecciones = [];
        this.newCol = dataReturned;
        console.log("New Collection: ",this.newCol);
        this.getCollections();
        this.changeRef.detectChanges();
      }
    });

    return await modal.present();
  }

  async deleteCollection(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas eliminar la colección?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.http.deleteCollection(id).subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.getCollections();
              }
            }, error => {
              console.log(error);
              return error;
            });
          }
        }
      ]
    });
  
    await alert.present();
  }

}
