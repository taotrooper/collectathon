import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  colecciones : any[];

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private alertController: AlertController) {
   this.getCollections();
 }

 getCollections(){
   this.colecciones = [];
   this.http.getRandomCollections().subscribe(
     (res) => { 
       this.colecciones = res['body'];
       console.log("colecciones: ",this.colecciones);
     },
     (error) =>{
       console.error(error);
     }
   )
   console.log(this.colecciones);
 }

 goToCollection(id: string) {
   console.log('id ', id);
   this.navCtrl.navigateForward("/collection/"+id);
 }

 refresh() {
   this.colecciones = [];
   this.getCollections();
 }

 ngOnInit() {
 }

}
