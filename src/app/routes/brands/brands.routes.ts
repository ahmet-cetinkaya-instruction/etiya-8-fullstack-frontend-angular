import { Routes } from '@angular/router';
import { CreateBrandPageComponent } from './create-brand-page/create-brand-page.component';

export const brandRoutes: Routes = [
  {
    path: 'brands/create',
    component: CreateBrandPageComponent,
  },
];
