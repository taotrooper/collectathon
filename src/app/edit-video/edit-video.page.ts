import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.page.html',
  styleUrls: ['./edit-video.page.scss'],
})
export class EditVideoPage implements OnInit {

  id: any;
  item: any;
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
  CreatorUserID: number;
  video = null;
  typeName: string;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.id = this.route.snapshot.params.id;
      this.video = new FormGroup({
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
     this.getVideo();
     console.log("video", this.video);
  }

  ngOnInit() {}

  getVideo() {
    this.http.getEdition(this.id, "video").subscribe(
      (res) => { 
        this.item = res['ItemID'];
        this.video = this.formBuilder.group({
          'Year' : [res['Year']],
          'EAN13' : [res['EAN13']],
          'EditionID' : [res['EditionID']],
          'FormatoVideo' : [res['FormatoVideo']],
          'TipoVideo' : [res['TipoVideo']],
          'Sistema' : [res['Sistema']],
          'NroDiscosVideo' : [res['NroDiscosVideo']],
          'RegionVideo' : [res['RegionVideo']],
          'Temporada' : [res['Temporada']],
          'VolumenVideo' : [res['VolumenVideo']],
          'NroEpisodios' : [res['NroEpisodios']]
      });
        this.getRegions();
        console.log("res: ", res);
        console.log("video: ", this.video);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getRegions() {
    this.RegionLista = [];
    if (this.video.value['FormatoVideo'] === "DVD") {
      this.RegionLista = ['DVD-0', 'DVD-1', 'DVD-2', 'DVD-3', 'DVD-4', 'DVD-5', 'DVD-6'];
    } else if (this.video.value['FormatoVideo'] === 'Blu-ray' || 
      this.video.value['FormatoVideo'] === 'Blu-ray 3D') {
      this.RegionLista = ['A/1', 'B/2', 'C/3', 'ABC'];
    }
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.video.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      
      console.log(this.video.value);
      var res = this.http.updateEdition(this.video.value, this.id, "video");
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/item/video/"+this.item);
    }
  }

  get errorControl() {
    return this.video.controls;
  }

}
