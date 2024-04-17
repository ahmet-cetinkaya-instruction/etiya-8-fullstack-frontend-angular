import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateBrandFormComponent } from '../../../features/brands/components/create-brand-form/create-brand-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-brand-page',
  standalone: true,
  imports: [CommonModule, CreateBrandFormComponent],
  templateUrl: './create-brand-page.component.html',
  styleUrl: './create-brand-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandPageComponent {
  constructor(private router: Router) {}

  onCreateBrandSuccess() {
    this.router.navigate(['/']);
  }
}
