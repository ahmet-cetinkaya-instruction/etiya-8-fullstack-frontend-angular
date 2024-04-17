import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { GetBrandsListResponse } from '../../models/get-brands-list-response';
import { SharedModule } from '../../../../shared/shared.module';
import { ListGroupItem } from '../../../../shared/components/list-group/list-group.component';

@Component({
  selector: 'app-brand-list-group',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './brand-list-group.component.html',
  styleUrl: './brand-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // OnPush: @Input() değerleri değiştiğinde çalışır.
  // Kullanıcı bir event tetiklediğinde çalışıyor.
  // changeDetectorRef.markForCheck() ile tetiklenir.
})
export class BrandListGroupComponent implements OnInit {
  brandList!: GetBrandsListResponse;
  @Output() selectBrand = new EventEmitter<number>();

  constructor(
    private brandsService: BrandsService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.brandsService.getList().subscribe({
      next: (response) => {
        this.brandList = response;
        console.log('next');
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.change.markForCheck();
        console.log('complete');
      },
    });
  }

  onBrandClick(id: number): any {
    this.selectBrand.emit(id);
  }

  get listGroupItems(): ListGroupItem[] {
    if (!this.brandList) return [];
    return this.brandList.map((x) => ({
      label: x.name,
      onClick: () => this.onBrandClick(x.id),
    }));
  }
}
