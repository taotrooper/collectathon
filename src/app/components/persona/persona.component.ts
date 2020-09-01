import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent implements OnInit {

  @Input('Names') Names: any;
  @Input('LastNames') LastNames: any;
  @Input('Role') Role: any;

  constructor() {
    if ((this.Role === "Principal") || (this.Role === "Secundario")) {
      this.Role = "Actor " + this.Role.toLowerCase();
    }
   }

  ngOnInit() {}

}
