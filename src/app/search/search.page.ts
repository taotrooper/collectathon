import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items: any[];
  type: any;
  criteria: any[] = [];
  numres = null;
  isSubmitted = false;
  formcriteria = null;

  constructor(public http: ApiRestService, private navCtrl: NavController, private route: ActivatedRoute, 
    private router: Router, private formBuilder: FormBuilder) {
      this.formcriteria= new FormGroup({
        tipo: new FormControl,
        campo: new FormControl(),
        valor: new FormControl()
     });
  }

  ngOnInit() {
    this.formcriteria = this.formBuilder.group({
      'tipo' : [null],
      'campo' : [null, Validators.required],
      'valor' : [null, Validators.required]
    });
  }

  addCriteria() {
    this.isSubmitted = true;
    if (!this.formcriteria.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else if(this.formcriteria.value['valor']) {
      var i = this.criteria.find(e => e['campo'] === this.formcriteria.value['campo']);
      if(!i) {
        var p = {
          "campo": this.formcriteria.value['campo'],
          "valor": this.formcriteria.value['valor']
        };
        this.criteria.push(p);
      } else {
        i['valor'] = this.formcriteria.value['valor'];
      }
      console.log("criteria:"+this.criteria);
    }
  }

  removeCriteria(a: any) {
    this.criteria.splice(this.criteria.findIndex(e => e === a), 1);
    console.log("people:"+this.criteria);
  }

  changeType() {
    if(this.criteria.find(o => o['campo'] === "ItemType")) {
      this.criteria.splice(this.criteria.findIndex(o => o['campo'] === "ItemType"), 1);
    }
    if(this.formcriteria.value['tipo']!=="all") {
      var p = {
        "campo": "ItemType",
        "valor": this.http.getItemType(this.formcriteria.value['tipo'])
      };
      this.criteria.push(p);
    }
  }

  get errorControl() {
    return this.formcriteria.controls;
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  process() {
    var c = {"body": this.criteria};
    console.log("c ",c);
    this.http.searchEditions(c).subscribe(
      (res) => { 
        this.items = res['body']['body'];
        this.numres = res['itemCount'] || res['body']['itemCount'];
        console.log(this.numres);
      },
      (error) =>{
        console.error(error);
        this.numres = 0;
      }
    );
  }

}
