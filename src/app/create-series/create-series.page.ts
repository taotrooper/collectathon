import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.page.html',
  styleUrls: ['./create-series.page.scss'],
})
export class CreateSeriesPage implements OnInit {

  SeriesName: string;
  Finished: boolean;
  SeriesID: any;
  newseries: FormGroup;

  isSubmitted = false;

  constructor(private modalController: ModalController, private navParams: NavParams, public http: ApiRestService, 
    private navCtrl: NavController, private route: ActivatedRoute, private router: Router, 
    private formBuilder: FormBuilder) {
      this.newseries = new FormGroup({
        SeriesName: new FormControl(),
        Finished: new FormControl()
     });
     }

  ngOnInit() {
    this.newseries = this.formBuilder.group({
      'SeriesName' : [null, Validators.required],
      'Finished' : [null]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newseries.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newseries.value);
      this.http.createSeries(this.newseries.value).subscribe(data => {
        console.log("First spot "+data['body']);
        this.SeriesID = data['body']['SeriesID'];
        console.log("antes de cerrar modal ",this.SeriesID);
        this.closeModal();
       }, error => {
        console.log(error);
      });
    }
  }

  get errorControl() {
    return this.newseries.controls;
  }

  async closeModal() {
    /*const onClosedData: string = this.SeriesID;*/
    await this.modalController.dismiss(this.SeriesID);
  }

}
