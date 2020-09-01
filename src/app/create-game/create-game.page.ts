import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.page.html',
  styleUrls: ['./create-game.page.scss'],
})
export class CreateGamePage implements OnInit {

  item: any;
  editionID: any;
  Year: number;
  EAN13: string;
  Plataforma: string;
  FormatoJuego: string;
  RegionJuego: string;
  Distribuidora: string;
  Estudio: string;
  NotasEdJuego: string;
  FormatoLista = ['Físico', 'Digital'];
  PlataformaLista = ['Android', 'Arcade', 'Atari', 'Game & Watch', 'Game Boy (GB)', 'Game Boy Advance (GBA)', 
  'Game Boy Color (GBC)', 'Game Gear', 'Google Stadia', 'iOS', 'Nintendo 3DS', 'Nintendo 64 (N64)', 
  'Nintendo DS (NDS)', 'Nintendo Entertainment System (NES)', 'Nintendo GameCube (NGC)', 'Nintendo Switch', 'PC',
  'PlayStation (PSX)', 'PlayStation 2 (PS2)', 'PlayStation 3 (PS3)', 'PlayStation 4 (PS4)', 'PlayStation 5 (PS5)', 
  'PlayStation Portable (PSP)', 'PlayStation Vita', 'Sega Dreamcast', 'Sega Genesis', 'Sega Mega Drive', 
  'Sega Saturn', 'Super Nintendo Entertainment System (SNES)', 'Wii', 'Wii U', 'Xbox', 'Xbox 360', 'Xbox One', 
  'Xbox Series X'];
  RegionLista = ['Sin región', 'NTSC-U/C', 'PAL', 'NTSC-J', 'Otra'];
  newedition = null;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.item = this.route.snapshot.params.item;
      this.newedition = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        Plataforma: new FormControl(),
        FormatoJuego: new FormControl(),
        RegionJuego: new FormControl(),
        Distribuidora: new FormControl(),
        Estudio: new FormControl(),
        NotasEdJuego: new FormControl()
     });
     console.log(this.item);
  }

  ngOnInit() {
    this.newedition = this.formBuilder.group({
        'Year' : [null],
        'EAN13' : [null],
        'Plataforma' : [null, Validators.required],
        'FormatoJuego' : [null, Validators.required],
        'RegionJuego' : [null, Validators.required],
        'Distribuidora' : [null],
        'Estudio' : [null],
        'NotasEdJuego' : [null]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newedition.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newedition.value);
      this.http.createEdition(4, this.item, this.newedition.value).subscribe(data => {
        console.log("data body: ",data['body']['EditionID']);
        this.editionID = data['body']['EditionID'];
        console.log("Edición ID:",this.editionID);
        this.navCtrl.navigateForward("/edition/game/"+this.editionID);
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
