import { Component } from '@angular/core';
import { OtpComponent } from "../../../../shared/components/otp/otp.component";

@Component({
  selector: 'app-authenticate',
  imports: [OtpComponent],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent {

}
