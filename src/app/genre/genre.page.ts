import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {

  id: any;
  name: any;
  type: any;
  items : any[];
  itemCount: number = 0;

  constructor(public http: ApiRestService, private navCtrl: NavController, private alertCtrl: AlertController,
    private route: ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getItemsByGenre();
    this.getGenre();
    console.log(this.items);
  }

  ngOnInit() {
  }

  getItemsByGenre() {
    this.items = [];
    this.http.getItemsByGenre(this.id).subscribe(
      (res) => { 
        this.items = res['body'];
        if(this.items) {
          this.itemCount = this.items.length;
        }
        console.log("res: ",this.items);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getGenre() {
    this.http.getGenre(this.id).subscribe(
      (res) => { 
        this.name = res['GenreName'];
        this.type = res['GenreType'];
        console.log("género: ",res);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToItem(id: string, type: number) {
    this.navCtrl.navigateForward("/item/"+this.http.getItemTypeURL(type)+"/"+id);
  }

}
