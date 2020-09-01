import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-mycomics',
  templateUrl: './mycomics.page.html',
  styleUrls: ['./mycomics.page.scss'],
})
export class MycomicsPage implements OnInit {

  ediciones: any[];
  searchControl: FormControl;
  items: any;

  constructor(public http: ApiRestService, private navCtrl: NavController, private router: Router, 
    public filterServ: FilterService, private alertController: AlertController ) {
    this.searchControl = new FormControl();
  }

  getEditions(){
    this.http.getComics().subscribe(
      (res) => { 
        this.ediciones = res['body'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToEdition(id: string, type: number) {
    this.navCtrl.navigateForward("/edition/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  goToAddComic() {
    this.navCtrl.navigateForward("/add-comic");
  }

  ngOnInit() {
    this.getEditions();
    this.setFilteredList(null);
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredList(search);
      });
  }

  setFilteredList(searchTerm) {
    this.items = this.filterServ.filterByEdition(searchTerm, this.ediciones);
  }

  async removeEditionFromUser(editionID: number) {
    console.log("holita ",editionID);
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.http.removeEditionFromUser(editionID).subscribe(data => {
              this.http.presentToast(data['body']['Message']);
              if (data.status == 200) {
                this.getEditions();
              }
             }, error => {
              console.log(error);
              return error;
            });
          }
        }
      ]
    });

    await alert.present();
    /*let result = await alert.onDidDismiss();
    console.log(result);*/
  }

}
