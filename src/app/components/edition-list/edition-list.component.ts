import { Component, Input, OnInit } from '@angular/core';
import { ApiRestService } from '../../api-rest.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edition-list',
  templateUrl: './edition-list.component.html',
  styleUrls: ['./edition-list.component.scss'],
})
export class EditionListComponent implements OnInit {

  @Input('ed') ed: any;
  isOwned: any;
  thumburl: any = null;
  imgserver = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/";
  thumbdir = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/thumb/";

  constructor(public http: ApiRestService, private navCtrl: NavController) {}

  goToEdition(id: string, type: number) {
    this.navCtrl.navigateForward("/edition/"+this.http.getItemTypeURL(type)+"/"+id);
  }

  ngOnInit() {
    this.http.findEditionImage(this.ed['EditionID']).subscribe(
      (res) => {
        if(res['found']==true) {
          this.thumburl = this.thumbdir + res['filename'];
        } else {
          console.log(this.ed['id']," not found!");
          this.thumburl = "../../assets/noimage.jpg";
        }
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}
