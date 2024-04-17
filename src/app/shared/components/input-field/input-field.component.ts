import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() message?: string;
  @Input() required = false;
}
