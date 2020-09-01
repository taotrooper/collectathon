import { Component, Input, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../../api-rest.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss'],
})
export class DetailBookComponent implements OnInit {

  /*@Input('book') book : any;*/
  @Input('id') id : any;
  ItemID: number;
  Year: number;
  ISBN: string;
  EAN13: string;
  NroPaginas: number;
  Editorial: string;
  Edicion: number;
  Idioma: string;
  Tipo: string;
  CreatorUserID: number;
  isOwned: any;
  user: any;

  constructor(public http: ApiRestService, private navCtrl: NavController, private alertCtrl: AlertController,
    private changeRef: ChangeDetectorRef) {
   }

  ngOnInit() {
    console.log("book: ",this.id);
    this.getEdition();
    this.getIsEditionOwned();
    this.user = this.http.getUserID();
    console.log(this.id," creator y user: ",this.CreatorUserID," ",this.user);
  }

  getEdition() {
    this.http.getEdition(this.id, "book").subscribe(
      (res) => { 
        console.log("detalles: ",res);
        this.ItemID = res['ItemID'];
        this.Year = res['Year'];
        this.EAN13 = res['EAN13'];
        this.ISBN = res['ISBN'];
        this.NroPaginas = res['NroPaginas'];
        this.Editorial = res['Editorial'];
        this.Edicion = res['Edicion'];
        this.Idioma = res['Idioma'];
        this.Tipo = res['Tipo'];
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
          this.isOwned = 1;
        } else this.isOwned = null;
        console.log("isOwned:",this.isOwned);
      },
      (error) =>{
        console.error(error);
        this.isOwned = null;
      }
    )
    console.log("isOwned:",this.isOwned);
  }

  goToEdit() {
    this.navCtrl.navigateForward("/edit-book/"+this.id);
  }

  async addEditionToUser() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Tienes esta edición?',
      buttons: [
        {
          text: 'Lo tengo',
          handler: () => {
            console.log(this.isOwned);
            this.http.addEditionToUser(this.id, "book", 1);
            this.getIsEditionOwned();
            console.log(this.isOwned);
            this.changeRef.detectChanges();
          }
        }, {
          text: 'Añadir a lista de deseos',
          handler: () => {
            this.http.addEditionToUser(this.id, "book", 0);
            this.getIsEditionOwned();
            this.changeRef.detectChanges();
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
    this.navCtrl.navigateForward("/edition/book/"+this.id);
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
                this.changeRef.detectChanges();
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
    this.navCtrl.navigateForward("/edition/book/"+this.id);
  }

  async deleteEdition() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar permanentemente la edición?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.http.deleteEdition(this.id, "book").subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.navCtrl.navigateForward("/item/book/"+this.ItemID);
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
