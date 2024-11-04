import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    IonicModule
  ],
  standalone: true
})
export class LoginComponent {

  // constructor() { }
  //
  // ngOnInit() {}

  onSubmit() {

  }
}
