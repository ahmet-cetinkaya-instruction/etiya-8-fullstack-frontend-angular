import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

// Tip tanımlamalarını yaptık.
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // Dışarıdan değerleri almak için @Input() dekoratörünü kullanıyoruz.
  @Input() type: ButtonType = 'button';
  @Input() variant: ButtonVariant = 'primary';
  // custom output event'leri oluşturduğumuzda html eventleriyle isim olarka karışmaması gerekiyor.
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
