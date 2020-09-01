import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-comic',
  templateUrl: './create-comic.page.html',
  styleUrls: ['./create-comic.page.scss'],
})
export class CreateComicPage implements OnInit {

  item: any;
  editionID: any;
  Year: number;
  EAN13: string;
  ISBNComic: string;
  TipoComic: string;
  FormatoComic: string;
  NroComic: number;
  EditorialComic: string;
  Origen: string;
  IdiomaComic: string;
  TipoLista = ['Grapas', 'Tomo', 'Omnibus'];
  FormatoLista = ['Físico', 'Digital'];
  OrigenLista = ['Norteamericano', 'Europeo', 'Manga', 'Otros'];
  newedition: FormGroup;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.item = this.route.snapshot.params.item;
      this.newedition = new FormGroup({
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
     console.log(this.item);
  }

  ngOnInit() {
    this.newedition = this.formBuilder.group({
        'Year' : [null],
        'EAN13' : [null],
        'ISBNComic' : [null],
        'TipoComic' : [null],
        'FormatoComic' : [null],
        'NroComic' : [null],
        'EditorialComic' : [null],
        'Origen' : [null],
        'IdiomaComic' : [null]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newedition.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.newedition.value);
      this.http.createEdition(5, this.item, this.newedition.value).subscribe(data => {
        console.log("data body: ",data['body']['EditionID']);
        this.editionID = data['body']['EditionID'];
        console.log("Edición ID:",this.editionID);
        this.navCtrl.navigateForward("/edition/comic/"+this.editionID);
       }, error => {
        console.log(error);
      });
    }
  }

  get errorControl() {
    return this.newedition.controls;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

}
