import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../interfaces/account.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [
    CommonModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent<T> {

  @Input() accounts: Account<T>[] = [];
  @Output() accountSelected: EventEmitter<T> = new EventEmitter<T>();

  onCardClick(account: Account<T>): void {
    this.accounts.forEach( c => c.isSelected = false );
    account.isSelected = true;
    this.accountSelected.emit(account.data);
  }

}
