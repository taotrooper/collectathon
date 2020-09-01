import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
})
export class EditBookPage implements OnInit {

  id: any;
  item: any;
  Year: number;
  EAN13: string;
  ISBN: string;
  NroPaginas: number;
  Editorial: string;
  Edicion: number;
  Idioma: string;
  Tipo: string;
  CreatorUserID: number;
  TipoLista = ['Bolsillo', 'Tapa dura', 'Ebook', 'Audiolibro'];
  book = null;
  typeName: string;
  isSubmitted = false;

  constructor(public http: ApiRestService, private navCtrl: NavController, public modalController: ModalController,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
      this.id = this.route.snapshot.params.id;
      this.book = new FormGroup({
        Year: new FormControl(),
        EAN13: new FormControl(),
        ISBN: new FormControl(),
        NroPaginas: new FormControl(),
        Editorial: new FormControl(),
        Edicion: new FormControl(),
        Idioma: new FormControl(),
        Tipo: new FormControl()
     });
     this.getBook();
     console.log("book", this.book);
  }

  ngOnInit() {}

  getBook() {
    this.http.getEdition(this.id, "book").subscribe(
      (res) => { 
        this.item = res['ItemID'];
        this.book = this.formBuilder.group({
          Year : [res['Year']],
          EAN13 : [res['EAN13']],
          EditionID : [res['EditionID']],
          ISBN : [res['ISBN']],
          NroPaginas : [res['NroPaginas']],
          Editorial : [res['Editorial']],
          Edicion : [res['Edicion']],
          Idioma : [res['Idioma']],
          Tipo : [res['Tipo']]
      });
        console.log("res: ", res);
        console.log("book: ", this.book);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.book.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      
      console.log(this.book.value);
      var res = this.http.updateEdition(this.book.value, this.id, "book");
      console.log("Resultado: ",res);
      this.navCtrl.navigateForward("/item/book/"+this.item);
    }
  }

  get errorControl() {
    return this.book.controls;
  }

}
