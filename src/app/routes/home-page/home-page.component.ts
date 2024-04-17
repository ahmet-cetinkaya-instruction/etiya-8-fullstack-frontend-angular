import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { BrandListGroupComponent } from '../../features/brands/components/brand-list-group/brand-list-group.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, BrandListGroupComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  constructor(private router: Router) {}

  onSelectBrand(brandId: number) {
    this.router.navigate([''], {
      queryParams: { brandId: brandId },
    });
  }
}
