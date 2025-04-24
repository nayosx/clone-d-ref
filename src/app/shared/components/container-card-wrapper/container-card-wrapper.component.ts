import { Component, Input } from '@angular/core';
import { CardWrapper } from '@shared/interfaces/card-wrapper.interface';

@Component({
  selector: 'app-container-card-wrapper',
  imports: [],
  templateUrl: './container-card-wrapper.component.html',
  styleUrl: './container-card-wrapper.component.scss'
})
export class ContainerCardWrapperComponent {
  
  @Input() cardInfo: CardWrapper = {
    icon: null,
    title: 'Default Title',
    description: 'Default description for the card info component.'
  };
}
