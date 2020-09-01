import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';
import { AuthService } from "../auth.service";
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  userform: FormGroup;

  constructor(public router: Router, public auth : AuthService, private navCtrl: NavController,
    private http: ApiRestService, private formBuilder: FormBuilder) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    console.log("UserID ",localStorage.getItem('UserID'));
    /*this.http.getUserNickname();*/
    console.log("Nickname ",JSON.parse(localStorage.getItem('Nickname')));
  }

  ngOnInit() {
    this.userform = this.formBuilder.group({
      'nickname' : [JSON.parse(localStorage.getItem('Nickname'))]
    });
    if(!localStorage.getItem('user')) {
      this.navCtrl.navigateRoot("/login");
    }   
  }

  signout() {
    //this.authService.SignOut();
    console.log("cerrando");
    this.auth.logout();
    this.router.navigate(['login']);
  }

  setNickname() {
    this.http.updateUser(this.user.uid, this.user.email, this.userform.value['nickname']);
  }

}
