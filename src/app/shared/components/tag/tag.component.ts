import { Component, Input } from '@angular/core';

export type TagType = 'warning' | 'danger';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) type: TagType = 'warning';
}
