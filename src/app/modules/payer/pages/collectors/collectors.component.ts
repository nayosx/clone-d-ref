import { Component } from '@angular/core';
import { DummyCards } from '../../../../shared/dummy/cards.dummy';
import { CardsComponent } from "../../../../shared/components/cards/cards.component";

@Component({
  selector: 'app-collectors',
  imports: [CardsComponent],
  templateUrl: './collectors.component.html',
  styleUrl: './collectors.component.scss'
})
export class CollectorsComponent {

  cards = DummyCards;


  onCardSelected(data: any): void {
    console.log(data);
  }

}
