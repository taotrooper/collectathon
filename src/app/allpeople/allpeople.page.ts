import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-allpeople',
  templateUrl: './allpeople.page.html',
  styleUrls: ['./allpeople.page.scss'],
})
export class AllpeoplePage implements OnInit {

  people: any[];

  constructor(public http: ApiRestService, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) {
      this.getPeople();
    }

  getPeople() {
    this.people = [];
    this.http.getPersonList().subscribe(
      (res) => { 
        this.people = res['body'];
        console.log("res: ",this.people);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  goToPerson(id: string) {
    this.navCtrl.navigateForward("/person/"+id);
  }

  goToNewPerson() {
    this.navCtrl.navigateForward("/create-person");
  }

  ngOnInit() {
  }

}
