import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.page.html',
  styleUrls: ['./edit-comic.page.scss'],
})
export class EditComicPage implements OnInit {

  id: any;
  item: any;
  Year: number;
  EAN13: string;
  ISBNComic: string;
  TipoComic: string;
  FormatoComic: string;
  NroComic: number;
  EditorialComic: string;
  Origen: string;
  IdiomaComic: string;
  CreatorUserID: number;
  TipoLista = ['Grapas', 'Tomo', 'Omnibus'];
  FormatoLista = ['Físico', 'Digital'];
  OrigenLista = ['Norteamericano', 'Europeo', 'Manga', 'Otros'];
  comic = null;
  typeName: string;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.id = this.route.snapshot.params.id;
      this.comic = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        ISBNComic: new FormControl(),
        TipoComic: new FormControl(),
        FormatoComic: new FormControl(),
        NroComic: new FormControl(),
        EditorialComic: new FormControl(),
        Origen: new FormControl(),
        IdiomaComic: new FormControl()
     });
     this.getComic();
     console.log("comic", this.comic);
  }

  ngOnInit() {}

  getComic() {
    this.http.getEdition(this.id, "comic").subscribe(
      (res) => { 
        this.item = res['ItemID'];
        this.comic = this.formBuilder.group({
          'Year' : [res['Year']],
          'EAN13' : [res['EAN13']],
          'EditionID' : [res['EditionID']],
          'ISBNComic' : [res['ISBNComic']],
          'TipoComic' : [res['TipoComic']],
          'FormatoComic' : [res['FormatoComic']],
          'NroComic' : [res['NroComic']],
          'EditorialComic' : [res['EditorialComic']],
          'Origen' : [res['Origen']],
          'IdiomaComic' : [res['IdiomaComic']]
        });
        console.log("res: ", res);
        console.log("comic: ", this.comic);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.comic.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      
      console.log(this.comic.value);
      var res = this.http.updateEdition(this.comic.value, this.id, "comic");
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/item/comic/"+this.item);
    }
  }

  get errorControl() {
    return this.comic.controls;
  }

}
