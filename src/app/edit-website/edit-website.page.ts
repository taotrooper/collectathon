import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiRestService } from '../api-rest.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-website',
  templateUrl: './edit-website.page.html',
  styleUrls: ['./edit-website.page.scss'],
})
export class EditWebsitePage implements OnInit {

  id: any;
  type: any;
  SiteURL: string;
  SiteText: boolean;
  WebsiteID: any;
  web/*: FormGroup*/ = null;

  isSubmitted = false;

  constructor(private modalController: ModalController, private navParams: NavParams, public http: ApiRestService, 
    private navCtrl: NavController, private route: ActivatedRoute, private router: Router, 
    private formBuilder: FormBuilder) {
      this.web = new FormGroup({
        URL: new FormControl(),
        Text: new FormControl()
     });
     }

  ngOnInit() {
    this.id = this.navParams.data.id;
    this.getWebsite();
  }

  getWebsite() {
    this.http.getWebsite(this.id).subscribe(
      (res) => { 
        this.web = this.formBuilder.group({
          'URL' : [res['URL'], Validators.required],
          'Text' : [res['Text'], Validators.required]
        });
        console.log("res: ", res)
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.web.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.web.value.WebsiteID = this.id;
      console.log(this.web.value);
      this.http.updateWebsite(this.web.value).subscribe(data => {
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
    return this.web.controls;
  }

  async closeModal() {
    await this.modalController.dismiss(this.WebsiteID);
  }

}
