import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { ChangeDetectorRef } from '@angular/core';
import { AddCollectionPage } from '../add-collection/add-collection.page';
import { EditCollectionPage } from '../edit-collection/edit-collection.page';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {

  id: any;
  name: any;
  user: any;
  myuser: any;
  ediciones : any[];

  constructor(public http: ApiRestService, private navCtrl: NavController, private alertController: AlertController,
    private route: ActivatedRoute, private router: Router, private modalController: ModalController,
    private changeRef: ChangeDetectorRef) { 
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.myuser = this.http.getUserID();
    this.getEditionsInCollection();
    this.getCollection();
    console.log(this.ediciones);
    this.changeRef.detectChanges();
  }

  getEditionsInCollection() {
    this.ediciones = [];
    this.http.getEditionsInCollection(this.id).subscribe(
      (res) => { 
        if(res['body']) {
          this.ediciones = res['body'];
          this.changeRef.detectChanges();
        }
        console.log("res: ",this.ediciones);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getCollection() {
    this.name = null;
    this.http.getCollection(this.id).subscribe(
      (res) => { 
        this.name = res['CollectionName'];
        this.user = res['UserID'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToEdition(id: string, type: number) {
    this.navCtrl.navigateForward("/edition/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  async editCollection() {
    //this.navCtrl.navigateForward("/edit-collection/"+this.id);
    const modal = await this.modalController.create({
      component: EditCollectionPage,
      componentProps: {
        "id": this.id
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      this.getCollection();
      this.changeRef.detectChanges();
    });

    return await modal.present();
  }

  async goToAddCollection() {
    console.log("Página modal");
    const modal = await this.modalController.create({
      component: AddCollectionPage,
      componentProps: {
        "id": this.id
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.ediciones = [];
        this.getEditionsInCollection();
        this.changeRef.detectChanges();
      }
    });

    return await modal.present();
  }

  async deleteCollection() {
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
            this.http.deleteCollection(this.id).subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.navCtrl.navigateForward("/collections");
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

  async deleteEditionFromCollection(itemID: number, editionID: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas eliminar edición de la colección?',
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
            this.http.removeEditionFromCollection(this.id, itemID, editionID).subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              this.ediciones = [];
              this.getEditionsInCollection();
              this.changeRef.detectChanges();
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
