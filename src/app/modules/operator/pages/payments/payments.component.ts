import { Component } from '@angular/core';
import { accounts } from '../../../../shared/dummy/accounts.dummy';
import { AccountsComponent } from "../../../../shared/components/accounts/accounts.component";

@Component({
  selector: 'app-payments',
  imports: [AccountsComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  accounts = accounts;

}
