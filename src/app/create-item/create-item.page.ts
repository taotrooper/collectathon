import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { CreateSeriesPage } from '../create-series/create-series.page';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.page.html',
  styleUrls: ['./create-item.page.scss'],
})
export class CreateItemPage implements OnInit {

  type: any;
  typeName: any;
  series: any[];
  genres: any[];
  newitem: FormGroup;
  ItemID: any;
	ItemType;
	CreatorUserID: any;
	ItemName: any;
  SeriesID: any;
  NewSeries: any = null;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.type = this.route.snapshot.params.type;
      this.typeName = this.http.getItemTypeName(this.type);
      this.getSeriesList();
      this.getGenreList();
      this.newitem = new FormGroup({
        ItemName: new FormControl(),
        SeriesID: new FormControl(),
        GenreID1: new FormControl(),
        GenreID2: new FormControl(),
        GenreID3: new FormControl()
     });
     this.SeriesID = null;
     this.ItemType = this.http.getItemType(this.type);
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

  ngOnInit() {
    this.newitem = this.formBuilder.group({
      'ItemName' : [null, Validators.required],
      'SeriesID' : [null],
      'GenreID1' : [null],
      'GenreID2' : [null],
      'GenreID3' : [null]
    });
  }

  async goToNewSeries() {
    console.log("Página modal");
    const modal = await this.modalController.create({
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
        this.getSeriesList();
      }
    });

    return await modal.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newitem.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.newitem.value['ItemType'] = this.ItemType;
      console.log(this.newitem.value);
      this.ItemID = this.http.createItem(this.newitem.value);
      console.log(this.ItemID);
    }
  }

  get errorControl() {
    return this.newitem.controls;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

}
