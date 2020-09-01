import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.page.html',
  styleUrls: ['./edition.page.scss'],
})
export class EditionPage implements OnInit {

  id: any;
  type: any;
  itemName: any;
  itemID: any;
  typeName: any;
  typeIcon: any;
  isOwned: any;
  people: any[];
  seriesID: any;
  seriesName: any;
  genreID1: any;
  genreID2: any;
  genreID3: any;
  genreName1: any;
  genreName2: any;
  genreName3: any;
  edicion: any;

  constructor(public http: ApiRestService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router, private changeRef: ChangeDetectorRef) {
      this.id = this.route.snapshot.params.id;
      this.type = this.route.snapshot.params.type;
      this.getEdition();
      //this.getIsEditionOwned();
     }
  
     getEdition() {
      this.http.getEdition(this.id, this.type).subscribe(
        (res) => { 
          this.edicion = res;
          console.log(res);
          console.log("id: "+this.id+", type: "+this.type);
          console.log("edicion: "+this.edicion);
          this.typeName = this.http.getItemTypeName(this.type);
          this.typeIcon = this.http.getItemTypeIcon(this.edicion['ItemType']);
          this.itemID = this.edicion['ItemID'];
          this.itemName = this.edicion['ItemName'];
          this.people = this.edicion['People'];
          this.seriesID = this.edicion['SeriesID'];
          this.seriesName = this.edicion['SeriesName'];
          this.genreID1 = this.edicion['GenreID1'];
          this.genreName1 = this.edicion['GenreName1'];
          this.genreID2 = this.edicion['GenreID2'];
          this.genreName2 = this.edicion['GenreName2'];
          this.genreID3 = this.edicion['GenreID3'];
          this.genreName3 = this.edicion['GenreName3'];
        },
        (error) =>{
          console.error(error);
        }
      )
    }

    /*getIsEditionOwned() {
      this.http.getEditionOwned(this.id).subscribe(
        (res) => { 
          this.isOwned = res['body'][0]['IsOwned'];
          console.log("isOwned:",this.isOwned);
        },
        (error) =>{
          console.error(error);
        }
      )
    }*/

    goToEdit() {
      console.log("/edit-"+this.type+"/"+this.id);
      this.navCtrl.navigateForward("/edit-"+this.type+"/"+this.id);
    }

    goToItem() {
      this.navCtrl.navigateForward("/item/"+this.type+"/"+this.itemID);
    }

    addPerson() {
      console.log("Añadir persona");
      this.navCtrl.navigateForward("/add-person/"+this.type+"/"+this.itemID);
    }

    removePerson(person: number, role: string) {
      console.log("Borrar persona ", person);
      this.http.removePersonToItem(person, this.itemID, role).subscribe(data => {
        this.http.presentToast(data['body']['Message']);
        if (data.status == 200) {
          this.people = [];
          this.getEdition();
          this.changeRef.detectChanges();
        }
      }, error => {
        console.log(error);
        return error;
      });
    }

  ngOnInit() {
  }

}
