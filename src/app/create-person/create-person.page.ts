import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.page.html',
  styleUrls: ['./create-person.page.scss'],
})
export class CreatePersonPage implements OnInit {

  Names: string;
  LastNames: boolean;
  PersonID: any;
  newperson: FormGroup;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, private formBuilder: FormBuilder, private modalController: ModalController) {
      this.newperson = new FormGroup({
        Names: new FormControl(),
        LastNames: new FormControl(),
        PersonID: new FormControl()
     });
     }

  ngOnInit() {
    this.newperson = this.formBuilder.group({
      'Names' : [null, Validators.required],
      'LastNames' : [null]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newperson.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newperson.value);
      this.PersonID = this.http.createPerson(this.newperson.value).subscribe(data => {
        console.log("First spot "+data['body']);
        this.PersonID = data['body']['PersonID'];
        console.log("antes de cerrar modal ",this.PersonID);
        this.closeModal();
       }, error => {
        console.log(error);
      });
      console.log("PersonID:",this.PersonID);
    }
  }

  get errorControl() {
    return this.newperson.controls;
  }

  async closeModal() {
    /*const onClosedData: string = this.SeriesID;*/
    await this.modalController.dismiss(this.PersonID);
  }

}
