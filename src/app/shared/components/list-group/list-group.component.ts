import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ListGroupItem = {
  label: string;
  routerLink?: string;
  onClick?: () => void;
};

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
  @Input() items: ListGroupItem[] = [];
  @Input() selectedIndex: number | null = null;

  constructor() {}

  onClick(item: ListGroupItem) {
    const itemIndex = this.items.indexOf(item);
    if (this.selectedIndex === itemIndex) this.selectedIndex = null;
    else this.selectedIndex = itemIndex;

    if (item.onClick) item.onClick();
  }
}
