import { Component, Input } from '@angular/core';

export type InfoCardItem = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  @Input() infoList: InfoCardItem[] = [];
}
