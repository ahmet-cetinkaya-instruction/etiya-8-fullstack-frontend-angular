import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brand-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './brand-list-group.component.html',
  styleUrl: './brand-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandListGroupComponent {
  constructor(private brandsService:BrandsService) {}


}
