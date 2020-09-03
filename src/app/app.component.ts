import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate: any;
  user: any;
  /*rootPage:any = 'LoginPage';*/
  /*rootPage:any = 'HomePage';*/
  rootPage = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router
  ) {
    console.log("hello");
    /*if(!localStorage.getItem('UserID')) {*/
    if(!localStorage.getItem('user')) {
      this.rootPage = '/login'
    }
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.rootPage) {
        this.router.navigateByUrl(this.rootPage);
      }
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Mis colecciones",
        url   : "/collections",
        icon  : "archive"
      },
      {
        title : "Todos mis ítems",
        url   : "/myitems",
        icon  : "library"
      },
      {
        title : "Mis libros",
        url   : "/mybooks",
        icon  : "book"
      },
      {
        title : "Mi música",
        url   : "/mymusic",
        icon  : "musical-notes"
      },
      {
        title : "Mi TV y películas",
        url   : "/myvideo",
        icon  : "film"
      },
      {
        title : "Mis videojuegos",
        url   : "/mygames",
        icon  : "game-controller"
      },
      {
        title : "Mis cómics",
        url   : "/mycomics",
        icon  : "chatbubbles"
      },
      {
        title : "Explorar",
        url   : "/explore",
        icon  : "globe"
      },
      {
        title : "Series",
        url   : "/allseries",
        icon  : "pricetags"
      },
      {
        title : "Gente",
        url   : "/allpeople",
        icon  : "people"
      },
      {
        title : "Géneros",
        url   : "/allgenres",
        icon  : "bookmarks"
      },
      {
        title : "Buscar ítems",
        url   : "/search",
        icon  : "search"
      },
      {
        title : "Configuración",
        url   : "/user",
        icon  : "settings-outline"
      }
    ];
  }

  closeApp() {
    if (this.platform.is('android')) {
        this.platform.backButton.subscribeWithPriority(0, () => {
          console.log('this.router.url', this.router.url);
          if (this.router.url === '/home' || this.router.url === '/login') {
           navigator['app'].exitApp();
          }
        }
      );
    }
  }
}
