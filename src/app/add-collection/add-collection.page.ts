import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.page.html',
  styleUrls: ['./add-collection.page.scss'],
})
export class AddCollectionPage implements OnInit {

  isSubmitted = false;
  id: any;
  edition: FormGroup;
  coleccion: any[];
  ediciones: any[];

  constructor(private modalController: ModalController, private navParams: NavParams, public http: ApiRestService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.navParams.get('id');
    console.log(this.id);
    this.edition = this.formBuilder.group({
      'EditionID' : [null, Validators.required]
    });
    this.getEditions();
    this.getCollection();
  }

  getEditions(){
    this.ediciones = [];
    this.http.getEditions().subscribe(
      (res) => { 
        if (res['body']) {
          this.ediciones = res['body'];
        }
        console.log("ediciones: ",this.ediciones);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getCollection(){
    this.coleccion = [];
    this.http.getEditionsInCollection(this.id).subscribe(
      (res) => { 
        if(res['body']) {
          this.coleccion = res['body'];
          console.log("coleccion: ",this.coleccion);
          this.coleccion.forEach(e => {
            console.log("e: ",e);
            var x = this.ediciones.map(function(item) { return item.EditionID; }).indexOf(e.EditionID);
            console.log("x: ",x);
            this.ediciones.splice(x, 1);
          });
        }
        console.log("ediciones: ", this.ediciones);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.edition.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.edition.value);
      var i = this.ediciones.map(function(item) { return item.EditionID; }).indexOf(this.edition.value['EditionID']);
      this.edition.value['ItemID'] = this.ediciones[i]['ItemID'];
      this.edition.value['ItemType'] = this.ediciones[i]['ItemType'];
      this.http.addEditionToCollection(this.id, this.edition.value);
      console.log("antes de cerrar modal ");
      this.closeModal();
    }
  }

  get errorControl() {
    return this.edition.controls;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
