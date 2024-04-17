import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrandsService } from '../../services/brands.service';
import { CreateBrandRequest } from '../../models/create-brand-request';
import { CreateBrandResponse } from '../../models/create-brand-response';

@Component({
  selector: 'app-create-brand-form',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandFormComponent {
  // Input ve Output
  @Output() success = new EventEmitter<CreateBrandResponse>();

  // State
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
  });
  // new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  // });
  formMessage: string | null = null;

  // Constructor
  constructor(private fb: FormBuilder, private brandsService: BrandsService) {}

  // Lifecycle

  // Main methods
  createBrand() {
    const request: CreateBrandRequest = {
      name: this.form.value.name,
    };
    this.brandsService.create(request).subscribe({
      next: (response) => {
        this.success.emit(response);
      },
      error: () => {
        this.formMessage = 'An error occurred. Please try again.';
      },
      complete: () => {
        this.form.reset();
        this.formMessage = 'Brand created successfully.';
      },
    });
  }

  // Event handlers
  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill out the form correctly.';
      return;
    }

    this.createBrand();
  }

  // Helpers
}
