import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    private router: Router, private formBuilder: FormBuilder) {
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
      this.PersonID = this.http.createPerson(this.newperson.value);
      console.log("PersonID:",this.PersonID);
      this.navCtrl.navigateForward("/allpeople");
    }
  }

  get errorControl() {
    return this.newperson.controls;
  }

}
