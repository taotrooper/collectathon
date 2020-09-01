import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.page.html',
  styleUrls: ['./edit-collection.page.scss'],
})
export class EditCollectionPage implements OnInit {

  CollectionID: any;
  CollectionName: string;
  UserID: any;
  Publica: any;
  collection = null;

  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, 
    private modalController: ModalController, private navParams: NavParams, 
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.collection = new FormGroup({
        CollectionName: new FormControl(),
        CollectionID: new FormControl(),
        Publica: new FormControl()
     });
     }

  ngOnInit() {
    //this.CollectionID = this.route.snapshot.params['id'];
    this.CollectionID = this.navParams.get('id');
    this.getCollection();
  }

  getCollection() {
    this.http.getCollection(this.CollectionID).subscribe(
      (res) => { 
        this.CollectionName = res['CollectionName'];
        this.UserID = res['UserID'];
        this.Publica = res['Publica'];
        this.collection = this.formBuilder.group({
          'CollectionName' : [res['CollectionName'], Validators.required],
          'Publica' : [res['Publica']==1]
        });
        console.log("res: ", this.collection);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.collection.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.collection.value);
      this.http.updateCollection(this.collection.value, this.CollectionID).subscribe(data => {
        this.http.presentToast(data['body']['Message']);
        if (data.status == 200) {
          //this.navCtrl.navigateForward("/collection/"+this.CollectionID);
          console.log("antes de cerrar modal ");
          this.closeModal();
        }
      }, error => {
        console.log(error);
        return error;
      });
    }
  }

  get errorControl() {
    return this.collection.controls;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
