import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  ediciones : any[];

  constructor(public http: ApiRestService, private navCtrl: NavController, private router: Router, 
    private alertController: AlertController, private changeRef: ChangeDetectorRef) {
    this.getWishlist();
  }

  getWishlist(){
    this.ediciones = [];
    this.http.getWishlist().subscribe(
      (res) => { 
        this.ediciones = res['body'];
        console.log("res: ",this.ediciones);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToEdition(id: string, type: number) {
    this.navCtrl.navigateForward("/edition/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  ngOnInit() {
  }

  markAsOwned(ed: number) {
    this.http.updateEditionToUser(ed, 1).subscribe(data => {
      this.http.presentToast(data['body']['Message']);
      if (data.status == 200) {
        this.getWishlist();
        this.changeRef.detectChanges();
      }
     }, error => {
      console.log(error);
      return error;
    });
  }

  async removeFromWishlist(ed: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas borrar la edición de tu lista?',
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
            this.http.removeEditionFromUser(ed).subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.getWishlist();
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
  }

}
