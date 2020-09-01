import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  id: any;
  names: any;
  lastnames: any;
  creatoruser: any;
  user: any;
  items : any[];
  itemCount: number = 0;

  constructor(public http: ApiRestService, private navCtrl: NavController, private alertCtrl: AlertController,
    private route: ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getItemsByPerson();
    this.getPerson();
    this.user = this.http.getUserID();
    console.log("usuarios: ", this.user, " ", this.creatoruser);
    console.log(this.items);
  }

  ngOnInit() {
  }

  getItemsByPerson() {
    this.items = [];
    this.http.getItemsByPerson(this.id).subscribe(
      (res) => { 
        this.items = res['body'];
        if(this.items) {
          this.itemCount = this.items.length;
        }
        console.log("res: ",this.items);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getPerson() {
    this.http.getPerson(this.id).subscribe(
      (res) => { 
        this.names = res['Names'];
        this.lastnames = res['LastNames'];
        this.creatoruser = res['CreatorUserID'];
        console.log("persona: ",res);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToItem(id: string, type: number) {
    this.navCtrl.navigateForward("/item/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  goToEditPerson() {
    this.navCtrl.navigateForward("/edit-person/"+this.id);
  }

  async deletePerson() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas eliminar la persona?',
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
            this.http.deletePerson(this.id);

          }
        }
      ]
    });

    await alert.present();
    /*let result = await alert.onDidDismiss();
    console.log(result);*/
    this.navCtrl.navigateForward("/allpeople");
  }

}
