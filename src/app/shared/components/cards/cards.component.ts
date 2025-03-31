import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { ImgFallbackDirective } from '@shared/directives/img-fallback.directive';

@Component({
  selector: 'app-cards',
  imports: [
    CommonModule,
    ImgFallbackDirective
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent<T> {

  @Input() cards: Card<T>[] = [];
  @Output() cardSelected: EventEmitter<T> = new EventEmitter<T>();

  onCardClick(card: Card<T>): void {
    this.cards.forEach( c => c.isSelected = false );
    card.isSelected = true;
    this.cardSelected.emit(card.data);
  }

}
