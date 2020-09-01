import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.page.html',
  styleUrls: ['./add-music.page.scss'],
})
export class AddMusicPage implements OnInit {

  albumes: any[];
  searchControl: FormControl;
  items: any;

  constructor(public http: ApiRestService, public filterServ: FilterService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) { 
      this.searchControl = new FormControl();
      this.http.getItems(2).subscribe(
        (res) => { 
          this.albumes = res['body'];
        },
        (error) =>{
          console.error(error);
        }
      )
  }

  ngOnInit() {
    this.setFilteredList(null);
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredList(search);
      });
  }

  setFilteredList(searchTerm) {
    this.items = this.filterServ.filterByItem(searchTerm, this.albumes);
  }

  goToItem(id: string) {
    console.log("/item/music/"+id);
    this.navCtrl.navigateForward("/item/music/"+id);
  }

  goToNewMusic() {
    console.log("estoy en goToNewMusic()");
    this.navCtrl.navigateForward("/create-item/music");
  }

}
