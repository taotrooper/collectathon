import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {

  games: any[];
  searchControl: FormControl;
  items: any;

  constructor(public http: ApiRestService, public filterServ: FilterService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) { 
      this.searchControl = new FormControl();
      this.http.getItems(4).subscribe(
        (res) => { 
          this.games = res['body'];
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
    this.items = this.filterServ.filterByItem(searchTerm, this.games);
  }

  goToItem(id: string) {
    console.log("/item/game/"+id);
    this.navCtrl.navigateForward("/item/game/"+id);
  }

  goToNewGame() {
    console.log("estoy en goToNewGame()");
    this.navCtrl.navigateForward("/create-item/game");
  }

}
