import { Component } from '@angular/core';
import { DummyCards } from '@shared/dummy/cards.dummy';
import { CardsComponent } from "@shared/components/cards/cards.component";

@Component({
  selector: 'app-collector',
  imports: [CardsComponent],
  templateUrl: './collector.component.html',
  styleUrl: './collector.component.scss'
})
export class CollectorComponent {

  cards = DummyCards;


  onCardSelected(data: any): void {
    console.log(data);
  }

}
