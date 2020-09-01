import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.page.html',
  styleUrls: ['./edit-person.page.scss'],
})
export class EditPersonPage implements OnInit {

  person = null;
  PersonID: any;
  Names: any;
  LastNames: any;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, private formBuilder: FormBuilder) {
      this.PersonID = this.route.snapshot.params.id;
      this.person = new FormGroup({
        PersonID: new FormControl(),
        Names: new FormControl(),
        LastNames: new FormControl()
     });
      this.getPerson();
     }
  
  getPerson() {
    this.http.getPerson(this.PersonID).subscribe(
      (res) => { 
        this.person = this.formBuilder.group({
          'PersonID' : [res['PersonID']],
          'Names' : [res['Names']],
          'LastNames' : [res['LastNames']]
        });
        console.log("person: ", this.person);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.person.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.person.value);
      var res = this.http.updatePerson(this.person.value, this.PersonID);
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/person/"+this.PersonID);
    }
  }

  get errorControl() {
    return this.person.controls;
  }

}
