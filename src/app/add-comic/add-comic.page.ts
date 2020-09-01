import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.page.html',
  styleUrls: ['./add-comic.page.scss'],
})
export class AddComicPage implements OnInit {

  comics: any[];
  searchControl: FormControl;
  items: any;

  constructor(public http: ApiRestService, public filterServ: FilterService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) { 
      this.searchControl = new FormControl();
      this.http.getItems(5).subscribe(
        (res) => { 
          this.comics = res['body'];
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
    this.items = this.filterServ.filterByItem(searchTerm, this.comics);
  }

  goToItem(id: string) {
    console.log("/item/comic/"+id);
    this.navCtrl.navigateForward("/item/comic/"+id);
  }

  goToNewComic() {
    console.log("estoy en goToNewComic()");
    this.navCtrl.navigateForward("/create-item/comic");
  }

}
