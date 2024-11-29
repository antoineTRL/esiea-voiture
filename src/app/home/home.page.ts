import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import {addCircle} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonicModule
  ],
})
export class HomePage {
  constructor() {
    addIcons({addCircle})
  }
}
