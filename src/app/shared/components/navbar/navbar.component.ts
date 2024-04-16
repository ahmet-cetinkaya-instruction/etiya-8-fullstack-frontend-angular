import { Component, Input, TemplateRef } from '@angular/core';

export type NavbarItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() title: string = '';
  @Input() items: NavbarItem[] = [];
  @Input() navbarStartTemplate: TemplateRef<any> | null = null;
  @Input() navbarEndTemplate: TemplateRef<any> | null = null; //| undefined;
}
