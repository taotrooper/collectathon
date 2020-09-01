import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { CreateSeriesPage } from '../create-series/create-series.page';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  type: any;
  typeName: any;
  series: any[];
  genres: any[];
  item = null;
  ItemID: any;
	ItemType: any;
	CreatorUserID: any;
	ItemName: any;
  SeriesID: any;
  SeriesName: any;
  NewSeries: any = null;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.ItemID = this.route.snapshot.params.id;
      this.item = this.formBuilder.group({
        'ItemName' : [null, Validators.required],
        'SeriesID' : [null],
        'SeriesName' : [null],
        'GenreID1'  : [null],
        'GenreID2'  : [null],
        'GenreID3'  : [null]
      });
      this.getSeriesList();
      this.getItem();
      console.log("type y typename: ",this.type," ",this.typeName);
     }
  
  getSeriesList() {
    this.http.getSeriesList().subscribe(
      (res) => { 
        this.series = res['body'];
        this.series = this.series.filter(o => o['CreatorUserID']>0);
        console.log("Series:",this.series);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getGenreList() {
    console.log("busco géneros de ",this.type);
    this.http.getGenreList(this.type).subscribe(
      (res) => { 
        this.genres = res['body'];
        console.log("Géneros ",this.genres);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getItem() {
    this.http.getItem(this.ItemID).subscribe(
      (res) => { 
        this.item = this.formBuilder.group({
          'ItemID': [res['ItemID']],
          'ItemName': [res['ItemName']],
          'SeriesID': [res['SeriesID']],
          'GenreID1': [res['GenreID1']],
          'GenreID2': [res['GenreID2']],
          'GenreID3': [res['GenreID3']]
        });
        this.ItemType = res['ItemType'];
        this.type = this.http.getItemTypeURL(this.ItemType);
        this.typeName = this.http.getItemTypeName(this.type);
        console.log("todo: ", this.item);
        console.log(this.type);
        this.getGenreList();
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {
    
  }

  async goToNewSeries() {
    console.log("Página modal");
    const modal = await this.modalController.create({
      component: CreateSeriesPage,
      componentProps: {
        "paramID": 123
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.series = [];
        this.NewSeries = dataReturned;
        console.log("New Series: ",this.NewSeries);
        this.getSeriesList();
      }
    });

    return await modal.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.item.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.item.value);
      var res = this.http.updateItem(this.item.value, this.ItemID);
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/item/"+this.type+"/"+this.ItemID);
    }
  }

  get errorControl() {
    return this.item.controls;
  }

}
