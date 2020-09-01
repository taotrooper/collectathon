import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.page.html',
  styleUrls: ['./create-website.page.scss'],
})
export class CreateWebsitePage implements OnInit {

  id: any;
  type: any;
  URL: string;
  Text: boolean;
  WebsiteID: any;
  newweb: FormGroup;

  isSubmitted = false;

  constructor(private modalController: ModalController, private navParams: NavParams, public http: ApiRestService, 
    private navCtrl: NavController, private route: ActivatedRoute, private router: Router, 
    private formBuilder: FormBuilder) {
      this.newweb = new FormGroup({
        URL: new FormControl(),
        Text: new FormControl()
     });
     }

  ngOnInit() {
    this.id = this.navParams.data.id;
    this.type = this.navParams.data.type;
    this.newweb = this.formBuilder.group({
      'URL' : [null, Validators.compose([
        Validators.required,
        Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])],
      'Text' : [null, Validators.required]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.newweb.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.newweb.value);
      this.http.createWebsite(this.newweb.value, this.id, this.type).subscribe(data => {
        console.log("Web "+data['body']);
        this.WebsiteID = data['body']['WebsiteID'];
        console.log("antes de cerrar modal ",this.WebsiteID);
        this.closeModal();
       }, error => {
        console.log(error);
      });
    }
  }

  get errorControl() {
    return this.newweb.controls;
  }

  async closeModal() {
    await this.modalController.dismiss(this.WebsiteID);
  }

}
