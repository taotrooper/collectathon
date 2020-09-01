import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.page.html',
  styleUrls: ['./create-collection.page.scss'],
})
export class CreateCollectionPage implements OnInit {

  CollectionName: string;
  CollectionID: any;
  Publica: any;
  newcollection: FormGroup;

  isSubmitted = false;

  constructor(private modalController: ModalController, private navParams: NavParams, public http: ApiRestService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.newcollection = new FormGroup({
        CollectionName: new FormControl(),
        CollectionID: new FormControl(),
        Publica: new FormControl()
     });
     }

  ngOnInit() {
    this.newcollection = this.formBuilder.group({
      'CollectionName' : [null, Validators.required],
      'Publica' : [null],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newcollection.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newcollection.value);
      this.http.createCollection(this.newcollection.value).subscribe(data => {
        console.log(data['body']['CollectionID']);
        this.CollectionID = data['body']['CollectionID'];
        console.log(this.CollectionID);
       }, error => {
        console.log(error);
      }
    );
      console.log("antes de cerrar modal ",this.CollectionID);
      this.closeModal();
    }
  }

  get errorControl() {
    return this.newcollection.controls;
  }

  async closeModal() {
    await this.modalController.dismiss(this.CollectionID);
  }

}
