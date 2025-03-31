import { Component } from '@angular/core';
import { DummyCards } from '../../../../shared/dummy/cards.dummy';
import { CardsComponent } from "../../../../shared/components/cards/cards.component";

@Component({
  selector: 'app-business',
  imports: [CardsComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {

  cards = DummyCards;


  onCardSelected(data: any): void {
    console.log(data);
  }

}
