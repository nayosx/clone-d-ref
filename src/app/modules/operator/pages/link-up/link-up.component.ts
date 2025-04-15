import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDuiNitComponent } from "@shared/components/input-dui-nit/input-dui-nit.component";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OtpComponent } from "@shared/components/otp/otp.component";


@Component({
  selector: 'app-link-up',
  imports: [
    InputDuiNitComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    OtpComponent
],
  templateUrl: './link-up.component.html',
  styleUrl: './link-up.component.scss'
})
export class LinkUpComponent implements OnInit {
  form!: FormGroup;
  formOtp!: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.fb.group({
      identificacion: ['']
    });

    this.formOtp = this.fb.group({
      otp: ['']
    });

  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onSubmitOtp(): void {
    console.log(this.formOtp.value);
  }

  onCancel(): void {
    this.form.reset();
  }
}