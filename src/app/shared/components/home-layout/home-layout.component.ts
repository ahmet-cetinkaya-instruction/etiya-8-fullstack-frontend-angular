import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarItem } from '../navbar/navbar.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent {
  public readonly navbarItems: NavbarItem[] = [
    {
      label: 'Home',
      routerLink: '/',
    },
    {
      label: 'Models',
      routerLink: '/models',
    },
  ];
}
