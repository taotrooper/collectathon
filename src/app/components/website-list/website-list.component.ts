import { Component, OnInit, Input } from '@angular/core';
import { ApiRestService } from '../../api-rest.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController, ModalController } from '@ionic/angular';

import { CreateWebsitePage } from '../../create-website/create-website.page';
import { EditWebsitePage } from '../../edit-website/edit-website.page';
import { stringify } from 'querystring';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.scss'],
})
export class WebsiteListComponent implements OnInit {

  @Input('id') id: any;
  @Input('type') type: any;
  webs: any[];
  newWeb: any;
  user: any;

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, private alertCtrl: AlertController, public modalController: ModalController) { }

  ngOnInit() {
    this.getWebsites();
    this.user = this.http.getUserID();
    console.log("user: ",this.user);
  }

  getWebsites() {
    this.webs = [];
    this.http.getWebsitesForObject(this.id, this.type).subscribe(
      (res) => { 
        this.webs = res['body'];
        console.log('webs ', this.webs);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  async goToNewWebsite() {
    console.log("Página modal");
    const modal = await this.modalController.create({
      component: CreateWebsitePage,
      componentProps: {
        "id": this.id,
        "type": this.type
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.webs = [];
        this.newWeb = dataReturned;
        console.log("New Web: ",this.newWeb);
        this.getWebsites();
      }
    });

    return await modal.present();
  }

  async deleteWebsite(webid: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar permanentemente la página web?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.http.deleteWebsite(webid);
            this.webs = [];
            this.getWebsites();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
  
    await alert.present();
    /*let result = await alert.onDidDismiss();*/
  }

  async goToEditWebsite(webid: number) {
    console.log("Edit website ",webid);
    const modal = await this.modalController.create({
      component: EditWebsitePage,
      componentProps: {
        "id": webid
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.webs = [];
        console.log("Edit Web: ",dataReturned);
        this.getWebsites();
      }
    });

    return await modal.present();
  }

  getIcon(url: string) {
    var icon: string = "compass-outline";
    if(url.indexOf("amazon.")>0) {
      icon = "logo-amazon";
    } else if(url.indexOf("facebook.com")>0) {
      icon = "logo-facebook";
    } else if(url.indexOf("twitter.com")>0) {
      icon = "logo-twitter";
    } else if(url.indexOf("instagram.com")>0) {
      icon = "logo-instagram";
    } else if(url.indexOf("playstation.com")>0) {
      icon = "logo-playstation";
    } else if(url.indexOf("steampowered.com")>0) {
      icon = "icon-steam";
    } else if(url.indexOf("xbox.com")>0) {
      icon = "logo-xbox";
    } else if(url.indexOf("youtube.com")>0) {
      icon = "logo-youtube"
    }
    return icon;
  }

}
