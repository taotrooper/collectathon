import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.page.html',
  styleUrls: ['./edit-music.page.scss'],
})
export class EditMusicPage implements OnInit {

  id: any;
  item: any;
  Year: number;
  EAN13: string;
  Formato: string;
  NroPistas: number;
  NroDiscos: number;
  Sello: string;
  NotasVersion: string;
  CreatorUserID: number;
  TipoLista = ['Vinilo', 'Cassette', 'CD', 'Digital'];
  music = null;
  typeName: string;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.id = this.route.snapshot.params.id;
      this.music = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        Formato: new FormControl(),
        NroPistas: new FormControl(),
        NroDiscos: new FormControl(),
        Sello: new FormControl(),
        NotasVersion: new FormControl()
     });
     this.getMusic();
     console.log("music", this.music);
  }

  ngOnInit() {}

  getMusic() {
    this.http.getEdition(this.id, "music").subscribe(
      (res) => { 
        this.item = res['ItemID'];
        this.music = this.formBuilder.group({
          'Year' : [res['Year']],
          'EAN13' : [res['EAN13']],
          'EditionID' : [res['EditionID']],
          'Formato' : [res['Formato']],
          'NroPistas' : [res['NroPistas']],
          'NroDiscos' : [res['NroDiscos']],
          'Sello' : [res['Sello']],
          'NotasVersion' : [res['NotasVersion']]
        });
        console.log("res: ", res);
        console.log("music: ", this.music);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.music.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      
      console.log(this.music.value);
      var res = this.http.updateEdition(this.music.value, this.id, "music");
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/item/music/"+this.item);
    }
  }

  get errorControl() {
    return this.music.controls;
  }

}
