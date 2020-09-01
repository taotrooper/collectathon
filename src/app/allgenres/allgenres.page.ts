import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-allgenres',
  templateUrl: './allgenres.page.html',
  styleUrls: ['./allgenres.page.scss'],
})
export class AllgenresPage implements OnInit {

  genres: any[];
  selector: FormGroup;
  showSelector: boolean = true;
  iconSelector = 'caret-up-outline';

  constructor(public http: ApiRestService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.getGenres();
      this.selector = new FormGroup({
        narrativa: new FormControl(),
        musical: new FormControl(),
        manga: new FormControl(),
        gaming: new FormControl()
      });
    }

  getGenres() {
    this.genres = [];
    this.http.getAllGenreList().subscribe(
      (res) => { 
        this.genres = res['body'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToGenre(id: string) {
    this.navCtrl.navigateForward("/genre/"+id);
  }

  clickFilter() {
    this.showSelector = !this.showSelector;
    if(this.showSelector) {
      this.iconSelector = 'caret-up-outline';
    } else {
      this.iconSelector = 'caret-down-outline';
    }
  }

  ngOnInit() {
    this.selector = this.formBuilder.group({
      'narrativa' : [true],
      'musical' : [true],
      'manga' : [true],
      'gaming' : [true]
  });
  }

}
