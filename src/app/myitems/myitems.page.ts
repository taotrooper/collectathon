import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { NavController, AlertController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.page.html',
  styleUrls: ['./myitems.page.scss'],
})
export class MyitemsPage implements OnInit {

  ediciones = [];
  searchControl: FormControl;
  items: any;
  page_number = 1;
  page_limit = 10;
  firstLoad = true;

  constructor(public http: ApiRestService, public filterServ: FilterService, private navCtrl: NavController, 
    private router: Router, private alertController: AlertController) {
    this.searchControl = new FormControl();
  }

  getEditions(){
    this.http.getEditions().subscribe(
      (res) => { 
        this.ediciones = res['body'];
        console.log(this.ediciones);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getEditionsPaginated(event){
    this.http.getEditionsPaginated(this.page_number, this.page_limit).subscribe(
      (res) => { 
        /*this.ediciones = res['body'];
        console.log(this.ediciones);*/
        for (let i = 0; i < res['body'].length; i++) {
          this.ediciones.push(res['body'][i]);
        }
        if(event) event.target.complete();

        if (!res['body']) {
          event.target.disabled = true;
        } 
        this.page_number++;
      }, error => {
        event.target.disabled = true;
        console.log(error);
      }
    );
  }

  doInfinite(event) {
    this.getEditionsPaginated(event);
  }

  goToEdition(id: string, type: number) {
    this.navCtrl.navigateForward("/edition/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  ngOnInit() {
    /*this.getEditions();*/
    this.getEditionsPaginated(event);
    /*this.setFilteredList(null);
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredList(search);
      });*/
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
