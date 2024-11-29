import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [
    FormsModule,
    IonicModule
  ],
  standalone: true
})
export class DetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
