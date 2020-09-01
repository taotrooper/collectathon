import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from "./user";
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { ApiRestService } from './api-rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(private afAuth: AngularFireAuth, public afStore: AngularFirestore, public http: ApiRestService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }

      // Registro de usuario
      registerUser(email:string, password:string){
        return this.afAuth.createUserWithEmailAndPassword( email, password)
        .then((res)=>{
         // El usuario se ha creado correctamente.
        })
        .catch(err=>Promise.reject(err))
     }

     // Login de usuario
    loginUser(email:string, password:string){
      console.log(email," ", password);
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then(user=>Promise.resolve(user))
        .catch(err=>Promise.reject(err));
    }

    loginGoogle() {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
        .then(user=>Promise.resolve(user))
        .catch(err=>Promise.reject(err));
    }

    // Devuelve la session
    get Session(){
      return this.afAuth.authState;
    }

    SendPasswordReset(email: string) {
      this.afAuth.sendPasswordResetEmail(email).then(() => {
        this.http.presentToast("Enviado correo. Revisa tu bandeja de entrada.");
      }).catch((err) => {
        this.http.presentToast("Error");
      });
    }

     // Logout de usuario
    logout(){
      this.afAuth.signOut().then(()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('UserID');
        localStorage.removeItem('Nickname');
      })
    }

    setUser() {
      console.log("Estoy en setUser");
      var user = firebase.auth().currentUser;
      const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      console.log("set user ",this.userData);
      this.http.login(user.email, user.uid);
      return userRef.set(userData, {
        merge: true
      })
    }

    getUser(){
      console.log("I'm here");
      /*if (res != null) {
        res.providerData.forEach(function (profile) {
          this.user = {
            'uid': profile.uid,
            'displayName': profile.displayName,
            'email': profile.email,
            'photoURL': profile.photoURL
          }
        });
      }*/
      console.log(this.userData);
    }
}
