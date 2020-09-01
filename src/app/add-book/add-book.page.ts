import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { ApiRestService } from '../api-rest.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  libros: any[];
  searchControl: FormControl;
  items: any;

  constructor(public http: ApiRestService, public filterServ: FilterService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) { 
      this.searchControl = new FormControl();
      this.http.getItems(1).subscribe(
        (res) => { 
          this.libros = res['body'];
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
    this.items = this.filterServ.filterByItem(searchTerm, this.libros);
  }

  goToItem(id: string) {
    console.log("/item/book/"+id);
    this.navCtrl.navigateForward("/item/book/"+id);
  }

  goToNewBook() {
    /*this.navCtrl.navigateForward("/new-book");*/
    console.log("estoy en goToNewBook()");
    this.navCtrl.navigateForward("/create-item/book");
  }

}
