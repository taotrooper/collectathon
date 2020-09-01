import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  id: any;
  name: any;
  creatorUser: any;
  user: any;
  finished: any;
  items : any[];
  itemCount: number = 0;

  constructor(public http: ApiRestService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router, private alertCtrl: AlertController) { 
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getItemsInSeries();
    this.getSeries();
    this.user = this.http.getUserID();
    console.log(this.items);
  }

  ngOnInit() {
  }

  getItemsInSeries() {
    this.items = [];
    this.http.getItemsInSeries(this.id).subscribe(
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

  getSeries() {
    this.http.getSeries(this.id).subscribe(
      (res) => { 
        this.name = res['SeriesName'];
        this.creatorUser = res['CreatorUserID'];
        this.finished = res['Finished'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToItem(id: string, type: number) {
    this.navCtrl.navigateForward("/item/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  goToEditSeries() {
    this.navCtrl.navigateForward("/edit-series/"+this.id);
  }

  async deleteSeries() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas eliminar la serie?',
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
            this.http.deleteSeries(this.id);

          }
        }
      ]
    });

    await alert.present();
    /*let result = await alert.onDidDismiss();
    console.log(result);*/
    this.navCtrl.navigateForward("/allseries");
  }

}
