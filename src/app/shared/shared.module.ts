import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { ListGroupComponent } from './components/list-group/list-group.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    HomeLayoutComponent,
    ListGroupComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    HomeLayoutComponent,
    ListGroupComponent,
  ],
})
export class SharedModule {}
