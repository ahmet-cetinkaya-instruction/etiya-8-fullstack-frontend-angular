import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { brandRoutes } from './routes/brands/brands.routes';

export const routes: Routes = [
  {
    path: '', // /
    pathMatch: 'full',
    component: HomePageComponent,
    // İlk karşılaştığı router-outlet'e HomePageComponent'i yerleştirir.
  },
  {
    path: 'demo', // /demo
    pathMatch: 'prefix', // varsayılan değer
    component: HomePageComponent,
    // İlk karşılaştığı (AppComponent) router-outlet'e HomePageComponent'i yerleştirir.
    children: [
      {
        path: 'button', // /demo/button
        component: ButtonComponent,
        // İkinci karşılaştığı (HomePageComponent) router-outlet'e ButtonComponent'i yerleştirir.
      },
    ],
  },

  ...brandRoutes, // ... operatörü ile brandRoutes dizisini routes dizisine ekledik.
  // brandRoutes[0],
  // brandRoutes[1],
  // brandRoutes[2],
  // ...
];
