import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-present-action-sheet',
  templateUrl: './present-action-sheet.component.html',
  styleUrls: ['./present-action-sheet.component.scss'],
})
export class PresentActionSheetComponent implements OnInit {

  constructor(private navCtrl: NavController, private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  async presentActionSheet() {
    console.log("Action sheet");
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona tipo',
      buttons: [{
        text: 'Libro',
        icon: 'book',
        handler: () => {
          console.log('Nuevo libro');
          this.navCtrl.navigateForward("/add-book");
        }
      }, {
        text: 'Música',
        icon: 'musical-notes',
        handler: () => {
          console.log('Nuevo álbum');
          this.navCtrl.navigateForward("/add-music");
        }
      }, {
        text: 'Vídeo',
        icon: 'film',
        handler: () => {
          console.log('Nuevo vídeo');
          this.navCtrl.navigateForward("/add-video");
        }
      }, {
        text: 'Videojuego',
        icon: 'game-controller',
        handler: () => {
          console.log('Nuevo videojuego');
          this.navCtrl.navigateForward("/add-game");
        }
      }, {
        text: 'Cómic',
        icon: 'chatbubbles',
        handler: () => {
          console.log('Nuevo Comic');
          this.navCtrl.navigateForward("/add-comic");
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
