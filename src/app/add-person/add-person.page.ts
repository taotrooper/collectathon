import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { findIndex } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { CreatePersonPage } from '../create-person/create-person.page';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.page.html',
  styleUrls: ['./add-person.page.scss'],
})
export class AddPersonPage implements OnInit {

  item: any;
  type: any;
  people: any[];
  peopleadded: any[] = [];
  isSubmitted = false;
  formpeople = null;

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, public modalController: ModalController, private formBuilder: FormBuilder,
    private changeRef: ChangeDetectorRef) {
      this.item = this.route.snapshot.params.item;
      this.type = this.route.snapshot.params.type;
      this.formpeople = new FormGroup({
        PersonID: new FormControl(),
        Names: new FormControl(),
        LastNames: new FormControl(),
        Role: new FormControl()
     });
      this.getPersonList();
  }

  ngOnInit() {
    this.formpeople = this.formBuilder.group({
      'PersonID' : [null, Validators.required],
      'Names' : [null],
      'LastNames' : [null],
      'Role' : [null, Validators.required]
    });
  }

  ionViewWillEnter() {
    this.getPersonList();
  }

  getPersonList() {
    this.people = [];
    this.http.getPersonList().subscribe(
      (res) => { 
        this.people = res['body'];
        this.people = this.people.filter(o => o['CreatorUserID']>0);
        console.log("People:",this.people);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  addSelect() {
    this.isSubmitted = true;
    if (!this.formpeople.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else if(this.formpeople.value['PersonID'] > 0) {
      console.log(this.formpeople.value['PersonID']);
      if(!this.peopleadded.find(e => e['PersonID'] == this.formpeople.value['PersonID']
      && e['Role'] == this.formpeople.value['Role'])) {
        var e = this.people.find(e=> e['PersonID'] == this.formpeople.value['PersonID']);
        var p = {
          'PersonID': e['PersonID'],
          'Names': e['Names'],
          'LastNames': e['LastNames'],
          'Role': this.formpeople.value['Role']
        };
        this.peopleadded.push(p);
      }
      console.log("people:"+this.peopleadded);
    }
    this.formpeople.reset();
  }

  async newPerson() {
    //this.navCtrl.navigateForward("/create-person");
    console.log("Página modal");
    const modal = await this.modalController.create({
      component: CreatePersonPage,
      componentProps: {}
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.people = [];
        this.getPersonList();
        this.changeRef.detectChanges();
      }
    });

    return await modal.present();
  }

  removePerson(a: any) {
    this.peopleadded.splice(this.peopleadded.findIndex(e => e === a), 1);
    console.log("people:"+this.peopleadded);
  }

  get errorControl() {
    return this.formpeople.controls;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  process() {
    var id: number;
    this.peopleadded.forEach(p => {
      this.http.addPersonToItem(p, this.item).subscribe(data => {
        console.log("Añadida persona ",data['body']['PersonID']);
       }, error => {
        console.log(error);
      });
    });
    this.navCtrl.navigateForward("/item/"+this.type+"/"+this.item);
  } 

}
