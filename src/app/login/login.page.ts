import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";
import { initializeApp} from "firebase/app";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {environment} from "../../environments/environment";
import { RegisterPage } from '../register/register.page';
import {AuthenticationService} from "../core/services/authentication/authentication.service";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {eyeOffOutline, eyeOutline} from "ionicons/icons";
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true
})
export class LoginPage implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  // Initialize Firebase
  oApp = initializeApp(environment.firebaseConfig);

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
    addIcons({eyeOutline, eyeOffOutline});
  }

  ngOnInit() {
  }

  getErrorMessage(email: string) {

  }

  register() {
    this.router.navigate(['register']);
  }

  async login() {

    const {email, password} = this.loginForm.value;
    if (email && password) {
      await this.authenticationService.signInWithEmailAndPassword({
        email,
        password
      });
      this.router.navigate(['/home']);
    }
  }
}
