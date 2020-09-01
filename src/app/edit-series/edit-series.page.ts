import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-series',
  templateUrl: './edit-series.page.html',
  styleUrls: ['./edit-series.page.scss'],
})
export class EditSeriesPage implements OnInit {

  series = null;
  SeriesID: any;
  SeriesName: any;
  Finished: any;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, private formBuilder: FormBuilder) {
      this.SeriesID = this.route.snapshot.params.id;
      this.series = new FormGroup({
        SeriesID: new FormControl(),
        SeriesName: new FormControl(),
        Finished: new FormControl()
     });
      this.getSeries();
     }
  
  getSeries() {
    this.http.getSeries(this.SeriesID).subscribe(
      (res) => { 
        this.series = this.formBuilder.group({
          'SeriesID' : [res['SeriesID']],
          'SeriesName' : [res['SeriesName']],
          'Finished' : [res['Finished']==1]
        });
        console.log("series: ", this.series);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.series.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.series.value);
      var res = this.http.updateSeries(this.series.value, this.SeriesID);
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/series/"+this.SeriesID);
    }
  }

  get errorControl() {
    return this.series.controls;
  }

}
