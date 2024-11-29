import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { initializeApp } from "firebase/app";
import { importProvidersFrom } from "@angular/core";
import { IonicModule } from "@ionic/angular";

// const firebaseConfig = {
//   apiKey: "AIzaSyCvVQ1HDg-EI5o2Lx9fXqKEkCyPvuT8QN0",
//   authDomain: "esiea-voiture.firebaseapp.com",
//   projectId: "esiea-voiture",
//   storageBucket: "esiea-voiture.firebasestorage.app",
//   messagingSenderId: "507092553534",
//   appId: "1:507092553534:web:eadfee99f4ab78cb8b266f",
//   measurementId: "G-0FJLF7L0QD"
// };
//
// initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy
    },
    importProvidersFrom(IonicModule.forRoot({innerHTMLTemplatesEnabled: true})),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
