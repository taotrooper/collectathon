import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from  '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  /*path:string = "http://localhost:8081/api";*/
  path:string = "http://www.mercury-retrograde.net/tfm/api";
  /*path:string = "http://91.117.92.244:8081/api";*/
  /*path: string = "http://collectathon.000webhostapp.com/api";*/
  user: any;
  UserID: number;

  ItemTypeIcon: {[key: number]: string} = {
    1: "book",
    2: "musical-notes",
    3: "film",
    4: "game-controller",
    5: "chatbubbles"
  }

  ItemTypeURL: {[key: number]: string} = {
    1: "book",
    2: "music",
    3: "video",
    4: "game",
    5: "comic"
  }

  ItemTypeNameEs: {[key: string]: string} = {
    "book": "Libro",
    "music": "Álbum",
    "video": "Vídeo",
    "game": "Videojuego",
    "comic": "Cómic"
  }

  constructor(private httpClient : HttpClient, private navCtrl: NavController, private toast: ToastController) {
    this.user = localStorage.getItem('user');  
    if(this.user) {
      this.setUserID();
    }
   }

   private setUserID() {
     this.UserID = parseInt(localStorage.getItem('UserID'));
     if(!this.UserID) {
       this.user = localStorage.getItem('user');
       this.login(this.user['email'], this.user['uid']);
     }
     /*this.UserID = 1;*/
   }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  public getUserID() {
    if(!this.UserID) this.setUserID();
    return this.UserID;
  }

  public getUserNickname() {
    this.httpClient.get(this.path + "/user/read.php?UserID=" + this.UserID)
    .subscribe(data => {
      localStorage.setItem('Nickname', JSON.stringify(data['Nickname']));
     }, error => {
      console.log(error);
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getItemTypeIcon(type: any) {
    return this.ItemTypeIcon[type];
  }

  getItemTypeURL(type: any) {
    var y: number = +type;
    return this.ItemTypeURL[y];
  }

  getItemTypeName(type: any) {
    return this.ItemTypeNameEs[type];
  }

  getItemType(typeURL: string) {
    return Object.keys(this.ItemTypeURL).find(key => this.ItemTypeURL[key] === typeURL);
  }

  login(email: string, uid: string) {
    console.log("Estoy en API login");
    var u = {
      'Email': email,
      'FirebaseID': uid
    };
    this.httpClient.post(this.path + "/user/login.php", u,{observe: 'response'})
       .subscribe(data => {
         console.log("data body: ",data['body']['UserID']);
         localStorage.setItem('UserID', data['body']['UserID']);
         this.setUserID();
         this.getUserNickname();
        }, error => {
         console.log(error);
       }
    );
  }

  getCollections():Observable<any> {
    return this.httpClient.get(this.path + "/collection/read.php?user=" + this.UserID);
  }

  getCollection(CollectionID: string):Observable<any> {
    return this.httpClient.get(this.path + "/collection/single-read.php?CollectionID=" + CollectionID);
  }

  getWishlist():Observable<any> {
    return this.httpClient.get(this.path + "/edition/read-wishlist.php?user=" + this.UserID);
  }

  getRandomCollections():Observable<any> {
    return this.httpClient.get(this.path + "/collection/read-random.php?user=" + this.UserID);
  }

  getEditions():Observable<any> {
    return this.httpClient.get(this.path + "/edition/read-summed.php?user=" + this.UserID);
  }

  getEditionsPaginated(page: number, num: number):Observable<any> {
    return this.httpClient.get(this.path + "/edition/read-summed.php?user=" + this.UserID
    + "&page=" + page + "&num=" + num);
  }

  getEditionsInCollection(CollectionID : string):Observable<any> {
    return this.httpClient.get(this.path + "/edition/read-collection.php?collection=" + CollectionID);
  }

  getItemsInSeries(SeriesID: string):Observable<any> {
    return this.httpClient.get(this.path + "/item/read-series.php?series=" + SeriesID);
  }

  getItemsByPerson(PersonID: string):Observable<any> {
    return this.httpClient.get(this.path + "/item/read-person.php?person=" + PersonID);
  }

  getItemsByGenre(GenreID: string):Observable<any> {
    return this.httpClient.get(this.path + "/item/read-genre.php?genre=" + GenreID);
  }

  getItem(ItemID : number):Observable<any> {
    return this.httpClient.get(this.path + '/item/single-read.php?ItemID=' + ItemID);
  }

  getBooks():Observable<any> {
    return this.httpClient.get(this.path + "/book/read-summed.php?user=" + this.UserID);
  }

  getMusic():Observable<any> {
    return this.httpClient.get(this.path + "/music/read-summed.php?user=" + this.UserID);
  }

  getVideos():Observable<any> {
    return this.httpClient.get(this.path + "/video/read-summed.php?user=" + this.UserID);
  }

  getGames():Observable<any> {
    return this.httpClient.get(this.path + "/game/read-summed.php?user=" + this.UserID);
  }

  getComics():Observable<any> {
    return this.httpClient.get(this.path + "/comic/read-summed.php?user=" + this.UserID);
  }

  getItems(ItemType: number):Observable<any> {
    return this.httpClient.get(this.path + "/item/read-summed.php?type=" + ItemType);
  }

  getEditionsOfItem(ItemID: number, ItemType: string):Observable<any> {
    return this.httpClient.get(this.path + "/"+ItemType+"/read.php?item=" + ItemID);
  }

  getEdition(EditionID: number, ItemType: string):Observable<any> {
    return this.httpClient.get(this.path + "/"+ItemType+"/single-read.php?EditionID=" + EditionID);
  }

  getEditionOwned(EditionID: number):Observable<any> {
    return this.httpClient.get(this.path + "/edition/read-owned.php?user=" + this.UserID 
    + "&edition=" + EditionID);
  }

  isEditionOwned(EditionID: number) {
    var e = this.getEditionOwned(EditionID);
    return e['ItemCount'] > 0;
  }

  getSeries(SeriesID: number):Observable<any> {
    return this.httpClient.get(this.path + "/series/single-read.php?SeriesID=" + SeriesID);
  }

  getSeriesList():Observable<any> {
    return this.httpClient.get(this.path + "/series/read.php");
  }

  getPerson(PersonID: number):Observable<any> {
    return this.httpClient.get(this.path + "/person/single-read.php?PersonID=" + PersonID);
  }

  getPersonList():Observable<any> {
    return this.httpClient.get(this.path + "/person/read.php");
  }

  getGenre(GenreID: number):Observable<any> {
    return this.httpClient.get(this.path + "/genre/single-read.php?GenreID=" + GenreID);
  }

  getAllGenreList():Observable<any> {
    return this.httpClient.get(this.path + "/genre/read.php");
  }

  getGenreList(type: string):Observable<any> {
    return this.httpClient.get(this.path + "/genre/read.php?type=" + type);
  }

  getWebsite(id: number) {
    return this.httpClient.get(this.path + "/website/single-read.php?WebsiteID=" + id);
  }

  getWebsitesForObject(id: number, type: string) {
    return this.httpClient.get(this.path + "/website/read.php?id=" + id + "&type=" + type);
  }

  // creates

  createItem(item: any) {
    item.CreatorUserID = this.UserID;
    console.log("createItem: ",item);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     this.httpClient.post(this.path + "/item/create.php", item,{observe: 'response'})
       .subscribe(data => {
         console.log("data body: ",data['body']['ItemID']);
         /*this.navCtrl.navigateForward("/create-item-next/"+
         this.getItemTypeURL(item.ItemType)+"/"+data['body']['ItemID']);*/
         this.navCtrl.navigateForward("/item/"+
         this.getItemTypeURL(item.ItemType)+"/"+data['body']['ItemID']);
        }, error => {
         console.log(error);
       }
    );
    /*return this.httpClient.post<any>(this.path, item, httpOptions).pipe(
      tap((prod: any) => console.log(`Added item ID=${prod.ItemID}`)),
      catchError(this.handleError<any>('/create-item'))
    );*/
  }

  /*createSeries(series: any): Observable<any> {
    return this.httpClient.post<any>(this.path + "/series/create.php", series, httpOptions).pipe(
      tap((prod: any) => console.log(`Added Series ID=${prod}`)),
      catchError(this.handleError<any>('/create-series'))
    );
  }*/

  createEdition(type: number, item: number, edition: any) {
    edition.CreatorUserID = this.UserID;
    edition.ItemID = item;
    edition.ItemType = type;
    console.log("createEdition: ",edition);
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/" + this.getItemTypeURL(type) + "/create.php", edition,{observe: 'response'});
  }

  createSeries(series: any) {
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     series.CreatorUserID = this.UserID;
      console.log("createItem: ",series);
     return this.httpClient.post(this.path + "/series/create.php", series,{observe: 'response'});
  }

  createCollection(col: any) {
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     col.UserID = this.UserID;
      console.log("createItem: ",col);
     return this.httpClient.post(this.path + "/collection/create.php", col,{observe: 'response'});
  }

  createPerson(p: any) {
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     p.CreatorUserID = this.UserID;
      console.log("createPerson: ",p);
    if (p.Names != null) {
     return this.httpClient.post(this.path + "/person/create.php", p,{observe: 'response'});
    }
  }

  createPersonWithItem(p: any, item: any) {
    console.log("createPerson: ",p['Names']," ", p['LastNames']);
    var person = {
      'Names': p['Names'],
      'LastNames': p['LastNames'],
      'CreatorUserID': this.UserID
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     this.httpClient.post(this.path + "/person/create.php", person,{observe: 'response'})
       .subscribe(data => {
         console.log("data body: ",data['body']['PersonID']);
         p['PersonID'] = data['body']['PersonID'];
         this.addPersonToItem(p, item);
        }, error => {
         console.log(error);
       }
    );
  }

  createWebsite(web: any, id: number, type: string) {
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     web.EntityID = id;
     web.EntityType = type;
     web.CreatorUserID = this.getUserID();
      console.log("createWebsite: ",web);
     return this.httpClient.post(this.path + "/website/create.php", web,{observe: 'response'});
  }

  addPersonToItem(p: any, item: any) {
    console.log("addPerson: ",p['PersonID']," ", item, " ", p['Role']);
    var person = {
      'PersonID': p['PersonID'],
      'ItemID': item,
      'Role': p['Role']
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     return this.httpClient.post(this.path + "/person/add-to-item.php", person,{observe: 'response'});
  }

  addEditionToUser(id: number, type: string, owned: number) {
    if(this.isEditionOwned(id)) {
      console.log("El usuario ya tiene la edición ",id);
      return 1;
    }
    var e = {
      'UserID': this.UserID,
      'EditionID': id,
      'IsOwned': owned
    };
    console.log("e: ", e);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     this.httpClient.post(this.path + "/edition/add-to-user.php", e,{observe: 'response'})
       .subscribe(data => {
         console.log("Added ",e['EditionID']," to user");
         return data;
        }, error => {
         console.log(error);
         return error;
       }
    );
  }

  addEditionToCollection(id: number, edition: any) {
    edition["CollectionID"] = id;
    console.log("add edition ",edition);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     this.httpClient.post(this.path + "/edition/add-to-collection.php", edition,{observe: 'response'})
       .subscribe(data => {
         console.log("Added ",edition['EditionID']," to collection ", edition['CollectionID']);
         return data;
        }, error => {
         console.log(error);
         return error;
       }
    );
  }

  updateCollection(col: any, id: any) {
    col.UserID = this.UserID;
    col.CollectionID = id;
    console.log("col: ",col);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/collection/update.php", col, {observe: 'response'});
  }

  updateItem(item: any, id: any) {
    item.CreatorUserID = this.UserID;
    item.ItemID = id;
    console.log("item: ",item);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );

    this.httpClient.post(this.path + "/item/update.php", item, {observe: 'response'})
    .subscribe(data => {
      console.log("Updated ",item['ItemID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  updateEdition(ed: any, id: any, type: string) {
    ed.EditionID = id;
    console.log("edition: ",ed);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/"+type+"/update.php", ed, {observe: 'response'})
    .subscribe(data => {
      console.log("Updated ",ed['EditionID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  updateSeries(series: any, id: any) {
    /*series.SeriesID = id;*/
    console.log("series: ",series);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/series/update.php", series, {observe: 'response'})
    .subscribe(data => {
      console.log("Updated ",series['SeriesID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  updatePerson(person: any, id: any) {
    console.log("person: ",person);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/person/update.php", person, {observe: 'response'})
    .subscribe(data => {
      console.log("Updated ",person['PersonID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  updateWebsite(web: any) {
    console.log("website: ",web);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/website/update.php", web, {observe: 'response'});
  }

  updateUser(uid: string, email: string, name: string) {
    var person = {
      'UserID': this.UserID,
      'Nickname': name,
      'FirebaseID': uid,
      'Email': email
    }
    console.log("user: ",person);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );

    this.httpClient.post(this.path + "/user/update.php", person, {observe: 'response'})
    .subscribe(data => {
      console.log("Updated ",person['UserID']);
      this.presentToast("Actualizado el apodo");
      localStorage.setItem('Nickname', JSON.stringify(name));
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  deleteCollection(id: number) {
    var c = {
      'CollectionID': id
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/collection/delete.php", c, {observe: 'response'});
  }

  deleteEdition(id: number, type: string) {
    var c = {
      'EditionID': id
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/"+type+"/delete.php", c, {observe: 'response'});
  }

  deleteItem(id: number, type: string) {
    var c = {
      'ItemID': id,
      "ItemTypeName": type
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/item/delete.php", c, {observe: 'response'})
    .subscribe(data => {
      console.log(data);
      if (data['body']['otros']!=0) {
        this.presentToast(data['body']['message'])
      } else {
        this.navCtrl.navigateForward("/myitems");
      }
     }, error => {
      console.log(error);
      return error;
    });
  }

  deleteSeries(id: number) {
    var c = {
      'SeriesID': id
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/series/delete.php", c, {observe: 'response'})
    .subscribe(data => {
      console.log(data);
      console.log("Deleted ",c['SeriesID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  deletePerson(id: number) {
    var c = {
      'PersonID': id
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/person/delete.php", c, {observe: 'response'})
    .subscribe(data => {
      console.log(data);
      console.log("Deleted ",c['PersonID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  deleteWebsite(id: number) {
    var c = {
      'WebsiteID': id
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    this.httpClient.post(this.path + "/website/delete.php", c, {observe: 'response'})
    .subscribe(data => {
      console.log(data);
      console.log("Deleted ",c['WebsiteID']);
      return data;
     }, error => {
      console.log(error);
      return error;
    });
  }

  removeEditionFromCollection(CollectionID: number, ItemID: number, EditionID: number) {
    var c = {
      'CollectionID': CollectionID,
      'ItemID': ItemID,
      'EditionID': EditionID
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/edition/remove-from-collection.php", c, {observe: 'response'});
  }

  removePersonToItem(person: number, item: any, role: string) {
    var p = {
      'PersonID': person,
      'ItemID': item,
      'Role': role
    };
    console.log("p: ",p);
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/person/remove-from-item.php", p,{observe: 'response'});
  }

  removeEditionFromUser(editionID: number) {
    var c = {
      'UserID': this.getUserID(),
      'EditionID': editionID
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/edition/remove-from-user.php", c, {observe: 'response'});
  }

  updateEditionToUser(edition: number, owned: number) {
    var c = {
      'UserID': this.getUserID(),
      'EditionID': edition,
      'IsOwned': owned
    };
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    return this.httpClient.post(this.path + "/edition/update-to-user.php", c, {observe: 'response'});
  }

  searchEditions(params: any):Observable<any> {
    var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     return this.httpClient.post(this.path + "/edition/search.php", params,{observe: 'response'});
  }

  findEditionImage(id: number):Observable<any> {
    return this.httpClient.get(this.path + "/img/find.php?name=" + id + ".jpg");
  }

  uploadEditionImage(formData: FormData) {
    return this.httpClient.post(this.path + "/img/upload.php", formData);
  }
  
}
