import { Component, Input, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../../api-rest.service';

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss'],
})
export class DetailVideoComponent implements OnInit {

  @Input('id') id : any;
  ItemID: number;
  FormatoVideo: string;
  TipoVideo: string;
  Sistema: string;
  NroDiscosVideo: number;
  Year: number;
  EAN13: string;
  RegionVideo: string;
  Temporada: number;
  VolumenVideo: number;
  NroEpisodios: number;
  CreatorUserID: number;
  isOwned: any;
  user: any;

  constructor(public http: ApiRestService, private navCtrl: NavController, private alertCtrl: AlertController) {
   }

  ngOnInit() {
    console.log("video: ",this.id);
    this.getEdition();
    this.getIsEditionOwned();
    this.user = this.http.getUserID();
    console.log(this.id," creator y user: ",this.CreatorUserID," ",this.user);
  }

  getEdition() {
    this.http.getEdition(this.id, "video").subscribe(
      (res) => { 
        console.log("detalles: ",res);
        this.ItemID = res['ItemID'];
        this.Year = res['Year'];
        this.EAN13 = res['EAN13'];
        this.FormatoVideo = res['FormatoVideo'];
        this.TipoVideo = res['TipoVideo'];
        this.Sistema = res['Sistema'];
        this.NroDiscosVideo = res['NroDiscosVideo'];
        this.RegionVideo = res['RegionVideo'];
        this.Temporada = res['Temporada'];
        this.VolumenVideo = res['VolumenVideo'];
        this.NroEpisodios = res['NroEpisodios'];
        this.CreatorUserID = res['CreatorUserID'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getIsEditionOwned() {
    this.http.getEditionOwned(this.id).subscribe(
      (res) => { 
        if (res['body']) {
          this.isOwned = res['body'][0]['IsOwned'];
        } else this.isOwned = null;
        console.log("isOwned:",this.isOwned);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToEdit() {
    this.navCtrl.navigateForward("/edit-video/"+this.id);
  }

  async addEditionToUser() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Tienes esta edición?',
      buttons: [
        {
          text: 'Lo tengo',
          handler: () => {
            this.http.addEditionToUser(this.id, "video", 1);
          }
        }, {
          text: 'Añadir a lista de deseos',
          handler: () => {
            this.http.addEditionToUser(this.id, "video", 0);
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
  
    await alert.present();
    /*let result = await alert.onDidDismiss();
    console.log(result);*/
    this.navCtrl.navigateForward("/edition/video/"+this.id);
  }

  async removeEditionFromUser() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
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
            this.http.removeEditionFromUser(this.id).subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.getIsEditionOwned();
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
    /*let result = await alert.onDidDismiss();
    console.log(result);*/
    this.navCtrl.navigateForward("/edition/video/"+this.id);
  }

  async deleteEdition() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar permanentemente la edición?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.http.deleteEdition(this.id, "video").subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.navCtrl.navigateForward("/item/video/"+this.ItemID);
              }
             }, error => {
              console.log(error);
              return error;
            });
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
  
    await alert.present();
    /*let result = await alert.onDidDismiss();
    console.log(result);*/
  }

}
