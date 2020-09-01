import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.page.html',
  styleUrls: ['./add-video.page.scss'],
})
export class AddVideoPage implements OnInit {

  videos: any[];
  searchControl: FormControl;
  items: any;

  constructor(public http: ApiRestService, public filterServ: FilterService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) { 
      this.searchControl = new FormControl();
      this.http.getItems(3).subscribe(
        (res) => { 
          this.videos = res['body'];
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
    this.items = this.filterServ.filterByItem(searchTerm, this.videos);
  }

  goToItem(id: string) {
    console.log("/item/video/"+id);
    this.navCtrl.navigateForward("/item/video/"+id);
  }

  goToNewVideo() {
    /*this.navCtrl.navigateForward("/new-book");*/
    console.log("estoy en goToNewVideo()");
    this.navCtrl.navigateForward("/create-item/video");
  }

}
