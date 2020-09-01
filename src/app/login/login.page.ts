import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ApiRestService } from '../api-rest.service';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

/*  user: any;*/
  user= { email : '', password : ''};
  loginform/*: FormGroup*/ = null;
  segm: string = "login";
  isSubmitted = false;

  constructor(
    public http: ApiRestService,
    /*public authService: AuthenticationService,*/
    public router: Router,
    public ngFireAuth: AngularFireAuth,
    public navCtrl: NavController, public auth : AuthService, 
    public alertCtrl : AlertController,
    private formBuilder: FormBuilder) {
      this.loginform = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
        segm: new FormControl()
     });
    this.ngFireAuth.onAuthStateChanged((user) => {
      if(user) {
        this.router.navigate(['home']);
      }
    });
  }

  /*ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user !== null && this.user.emailVerified !== false) {
      this.router.navigate(['home']);
    }
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        /*if(this.authService.isEmailVerified) {*/ //ya estaba note
          /*this.http.login();
          this.router.navigate(['home']);*/
        /*} else { //ya estaba note
          window.alert('Error: Verifica tu dirección de correo antes')
          return false;
        }
      }).catch((error) => {
        window.alert("logIn error: "+error.message)
      })
  }

  goToRegister() {
    this.router.navigate(['register']);
  }*/

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'segm' : [this.segm]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(email: string, password: string){
    this.isSubmitted = true;
    if (!this.loginform.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.loginform.value);
      this.auth.registerUser(this.loginform.value['email'],this.loginform.value['password'])
    .then((user) => {
      this.auth.setUser();
      this.router.navigate(['home']);
    })
    .catch(err=>{
      window.alert("signin error: "+err.message);
    })}
  }

  login(email: string, password: string) {
    this.isSubmitted = true;
    if (!this.loginform.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.loginform.value);
      this.auth.loginUser(this.loginform.value['email'],this.loginform.value['password'])
    .then((user) => {
      this.auth.setUser();
      this.router.navigate(['home']);
    })
    .catch(err=>{
      window.alert("login error: "+err.message);
      console.log(err);
    })}
  }

  loginGoogle() {
    console.log("Estoy en login logingoogle");
    this.auth.loginGoogle()
    .then((user) => {
      this.auth.setUser();
      this.router.navigate(['home']);
    })
    .catch(err=>{
      window.alert("login error: "+err.message);
      console.log(err);
    })
  }

  forgotPassword() {
    this.isSubmitted = true;
    if (!this.loginform.value['email']) {
      this.http.presentToast("Asegúrate de escribir tu correo en el formulario.");
      return false;
    } else {
      this.auth.SendPasswordReset(this.loginform.value['email']);
    }
  }

  segmentChanged(event: any) {
    /*console.log('Segment changed', event);*/
    this.segm = this.loginform.value['segm'];
    console.log();
  }

  exitApp(){
    navigator['app'].exitApp();
  }

}