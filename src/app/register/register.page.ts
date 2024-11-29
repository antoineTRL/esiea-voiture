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
import {createUserWithEmailAndPassword} from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true
})

export class RegisterPage implements OnInit {
  public registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });
  private FirebaseError: unknown;



  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    addIcons({eyeOutline, eyeOffOutline});
  }

  ngOnInit() {
  }

  private validateSignUpForm(): boolean {
    const fullName        = this.registerForm.get('fullName')?.value;
    const email           = this.registerForm.get('email')?.value
    const phone           = this.registerForm.get('phone')?.value
    const password        = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      console.log('Passwords do not match')
      console.log(password)
      console.log(confirmPassword)

      return false;
    }

    if (this.registerForm.invalid) {
      console.log('Please fill all fields correctly')
      console.log(fullName)
      console.log(email)
      console.log(phone)
      console.log(password)
      console.log(confirmPassword)
      return false;
    }

    return true;
  }

  async onSignUp(): Promise<void> {

    this.validateSignUpForm();

    try {
      const isRegistered = await this.authenticationService.signUpWithEmailAndPassword(this.registerForm.value as unknown as IUser);
      if (isRegistered) {
        console.log('User registered successfully')
        this.router.navigate(['/login']);
      }
    } catch (error: unknown) {
        return;
      }

  }
}
