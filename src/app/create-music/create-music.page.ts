import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.page.html',
  styleUrls: ['./create-music.page.scss'],
})
export class CreateMusicPage implements OnInit {

  item: any;
  editionID: any;
  Year: number;
  EAN13: string;
  Formato: string;
  NroPistas: number;
  NroDiscos: number;
  Sello: string;
  NotasVersion: string;
  TipoLista = ['Vinilo', 'Cassette', 'CD', 'Digital'];
  newedition: FormGroup;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.item = this.route.snapshot.params.item;
      this.newedition = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        Formato: new FormControl(),
        NroPistas: new FormControl(),
        NroDiscos: new FormControl(),
        Sello: new FormControl(),
        NotasVersion: new FormControl()
     });
     console.log(this.item);
  }

  ngOnInit() {
    this.newedition = this.formBuilder.group({
        'Year' : [null],
        'EAN13' : [null],  
        'Formato' : [null],
        'NroPistas' : [null],
        'NroDiscos' : [null],
        'Sello' : [null],
        'NotasVersion' : [null]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newedition.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newedition.value);
      this.http.createEdition(2, this.item, this.newedition.value).subscribe(data => {
        console.log("data body: ",data['body']['EditionID']);
        this.editionID = data['body']['EditionID'];
        console.log("Edición ID:",this.editionID);
        this.navCtrl.navigateForward("/edition/music/"+this.editionID);
       }, error => {
        console.log(error);
      });
    }
  }

  get errorControl() {
    return this.newedition.controls;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

}
