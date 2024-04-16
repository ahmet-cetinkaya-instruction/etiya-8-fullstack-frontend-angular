import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ButtonComponent, HomeLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, ButtonComponent, HomeLayoutComponent]
})
export class SharedModule {}
