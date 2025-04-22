import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OtpComponent } from "@shared/components/otp/otp.component";

@Component({
  selector: 'app-step4-otp',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    OtpComponent
  ],
  templateUrl: './step4-otp.component.html'
})
export class Step4OtpComponent implements OnInit {
  formOtp!: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.formOtp = this.fb.group({
      otp: ['']
    });

  }

  onSubmitOtp(): void {
    console.log(this.formOtp.value);
  }

  onCancel(): void {
    this.formOtp.reset();
  }
}