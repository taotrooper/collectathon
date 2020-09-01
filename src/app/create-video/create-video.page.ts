import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.page.html',
  styleUrls: ['./create-video.page.scss'],
})
export class CreateVideoPage implements OnInit {

  item: any;
  editionID: any;
  Year: number;
  EAN13: string;
  FormatoVideo: string;
  TipoVideo: string;
  Sistema: string;
  NroDiscosVideo: number;
  RegionVideo: string;
  Temporada: number;
  VolumenVideo: number;
  NroEpisodios: number;
  FormatoLista = ['VHS', 'DVD', 'Blu-ray', 'Blu-ray 3D', 'Digital'];
  TipoLista = ['Película', 'Serie', 'Cortometraje', 'Documental', 'Concierto', 'Teatro', 
  'Otra Actuación', 'Curso'];
  SistemaLista = ['PAL', 'NTSC', 'SECAM', 'N/A'];
  RegionLista = [];
  newedition = null;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.item = this.route.snapshot.params.item;
      this.newedition = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        FormatoVideo: new FormControl(),
        TipoVideo: new FormControl(),
        Sistema: new FormControl(),
        NroDiscosVideo: new FormControl(),
        RegionVideo: new FormControl(),
        Temporada: new FormControl(),
        VolumenVideo: new FormControl(),
        NroEpisodios: new FormControl()
     });
     console.log(this.item);
  }

  ngOnInit() {
    this.newedition = this.formBuilder.group({
        'Year' : [null],
        'EAN13' : [null],
        'FormatoVideo' : [null, Validators.required],
        'TipoVideo' : [null, Validators.required],
        'Sistema' : [null, Validators.required],
        'NroDiscosVideo' : [null],
        'RegionVideo' : [null],
        'Temporada' : [null],
        'VolumenVideo' : [null],
        'NroEpisodios' : [null]
    });
  }

  getRegions() {
    this.RegionLista = [];
    if (this.newedition.value['FormatoVideo'] === "DVD") {
      this.RegionLista = ['DVD-0', 'DVD-1', 'DVD-2', 'DVD-3', 'DVD-4', 'DVD-5', 'DVD-6'];
    } else if (this.newedition.value['FormatoVideo'] === 'Blu-ray' || 
      this.newedition.value['FormatoVideo'] === 'Blu-ray 3D') {
      this.RegionLista = ['A/1', 'B/2', 'C/3', 'ABC'];
    }
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newedition.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newedition.value);
      this.http.createEdition(3, this.item, this.newedition.value).subscribe(data => {
        console.log("data body: ",data['body']['EditionID']);
        this.editionID = data['body']['EditionID'];
        console.log("Edición ID:",this.editionID);
        this.navCtrl.navigateForward("/edition/video/"+this.editionID);
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
