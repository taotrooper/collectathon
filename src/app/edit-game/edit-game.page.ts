import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.page.html',
  styleUrls: ['./edit-game.page.scss'],
})
export class EditGamePage implements OnInit {

  id: any;
  item: any;
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
  CreatorUserID: number;
  game = null;
  typeName: string;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.id = this.route.snapshot.params.id;
      this.game = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        Plataforma: new FormControl(),
        FormatoJuego: new FormControl(),
        RegionJuego: new FormControl(),
        Distribuidora: new FormControl(),
        Estudio: new FormControl(),
        NotasEdJuego: new FormControl()
     });
     this.getGame();
     console.log("game", this.game);
  }

  ngOnInit() {}

  getGame() {
    this.http.getEdition(this.id, "game").subscribe(
      (res) => { 
        this.item = res['ItemID'];
        this.game = this.formBuilder.group({
          'Year' : [res['Year']],
          'EAN13' : [res['EAN13']],
          'EditionID' : [res['EditionID']],
          'Plataforma' : [res['Plataforma']],
          'FormatoJuego' : [res['FormatoJuego']],
          'RegionJuego' : [res['RegionJuego']],
          'Distribuidora' : [res['Distribuidora']],
          'Estudio' : [res['Estudio']],
          'NotasEdJuego' : [res['NotasEdJuego']]
      });
        console.log("res: ", res);
        console.log("game: ", this.game);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.game.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      
      console.log(this.game.value);
      var res = this.http.updateEdition(this.game.value, this.id, "game");
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/item/game/"+this.item);
    }
  }

  get errorControl() {
    return this.game.controls;
  }

}
