import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  id: any;
  type: any;
  typeName: any;
  typeIcon: any;
  itemCount: number;
  item: any;
  itemName: any;
  series: any;
  seriesName: any;
  genreID1: any;
  genreID2: any;
  genreID3: any;
  genreName1: any;
  genreName2: any;
  genreName3: any;
  people: any[];
  creatorUser: any;
  userID: any;
  ediciones: any[];

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, private alertCtrl: AlertController, public modalController: ModalController) {
      this.id = this.route.snapshot.params.id;
      this.type = this.route.snapshot.params.type;
      this.userID = http.getUserID();
      this.getItem();
      this.getEditions();
      console.log("id: "+this.id+", type: "+this.type+", userID: "+this.userID);
     }

     getItem() {
      this.http.getItem(this.id).subscribe(
        (res) => { 
          this.item = res;
          console.log(this.item);
          this.typeName = this.http.getItemTypeName(this.type);
          this.typeIcon = this.http.getItemTypeIcon(res['ItemType']);
          console.log(this.typeIcon);
          this.itemName = res['ItemName'];
          this.series = res['SeriesID'];
          this.seriesName = res['SeriesName'];
          this.genreID1 = res['GenreID1'];
          this.genreName1 = res['GenreName1'];
          this.genreID2 = res['GenreID2'];
          this.genreName2 = res['GenreName2'];
          this.genreID3 = res['GenreID3'];
          this.genreName3 = res['GenreName3'];
          this.people = res['People'];
          this.creatorUser = res['CreatorUserID'];
          console.log("creator user:", this.creatorUser);
        },
        (error) =>{
          console.error(error);
        }
      )
     }
  
     getEditions() {
      this.ediciones = [];
      this.http.getEditionsOfItem(this.id, this.type).subscribe(
        (res) => { 
          this.ediciones = res['body'];
          this.itemCount = res['itemCount'];
          console.log('ediciones ', this.ediciones);
        },
        (error) =>{
          console.error(error);
          this.itemCount = 0;
        }
      )
    }

  goToEditItem() {
    this.navCtrl.navigateForward("/edit-item/"+this.id);
  }

  goToEditEdition(ed: any) {
    this.navCtrl.navigateForward("/edit-"+this.type+"/"+ed);
  }
  
  goToNewEdition() {
    this.navCtrl.navigateForward("/create-"+this.type+"/"+this.id);
  }

  async deleteItem() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar permanentemente el item y todas sus ediciones?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.http.deleteItem(this.id, this.type);
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
    /*let result = await alert.onDidDismiss();*/
  }

  addPerson() {
    console.log("Añadir persona");
    this.navCtrl.navigateForward("/add-person/"+this.type+"/"+this.id);
  }

  removePerson(person: number, role: string) {
    console.log("Borrar persona ", person);
    this.http.removePersonToItem(person, this.id, role).subscribe(data => {
      this.http.presentToast(data['body']['Message']);
      if (data.status == 200) {
        this.people = [];
        this.getItem();
      }
    }, error => {
      console.log(error);
      return error;
    });
  }

  ngOnInit() {
  }

}
