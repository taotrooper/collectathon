import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

import { CreateSeriesPage } from '../create-series/create-series.page';

@Component({
  selector: 'app-allseries',
  templateUrl: './allseries.page.html',
  styleUrls: ['./allseries.page.scss'],
})
export class AllseriesPage implements OnInit {

  series: any[];
  NewSeries: any;

  constructor(public http: ApiRestService, private navCtrl: NavController, private ModalController: ModalController,
    private route: ActivatedRoute, private router: Router) {
      this.getSeries();
    }

  getSeries() {
    this.series = [];
    this.http.getSeriesList().subscribe(
      (res) => { 
        this.series = res['body'];
        console.log("res: ",this.series);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToSeries(id: string) {
    this.navCtrl.navigateForward("/series/"+id);
  }

  ngOnInit() {
  }

  async goToNewSeries() {
    console.log("Página modal");
    const modal = await this.ModalController.create({
      component: CreateSeriesPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.series = [];
        this.NewSeries = dataReturned;
        console.log("New Series: ",this.NewSeries);
        this.getSeries();
      }
    });

    return await modal.present();
  }

}
