import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { AuthenticationService, IUser } from "../../../../esiea-voiture/src/app/core/services/authentication/authentication.service";
import { Router } from "@angular/router";
import {addIcons} from "ionicons";
import {eyeOffOutline, eyeOutline} from "ionicons/icons";
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    FormsModule,
    IonicModule
  ],
  standalone: true
})

export class RegisterPage implements OnInit {
  public registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });
  public passwordType = 'password';
  public passwordIcon = 'eye-outline';



  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    addIcons({eyeOutline, eyeOffOutline});
  }

  ngOnInit() {
  }

  public onToggleShowPassword(): void {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye-off-outline';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-outline';
    }
  }

  public onSignUp(): void {
    this.authenticationService.signUpWithEmailAndPassword(this.registerForm.value as unknown as IUser)
      .then((userCreated: boolean | unknown) => {
        console.log(userCreated);
        if(userCreated) {
          this.router.navigate(['contact']);
        }
      }).catch((error) => {
      console.log(error);
    })
  }

}
