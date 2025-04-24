import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OtpComponent } from "@shared/components/otp/otp.component";
import { ContainerDialogComponent } from '@shared/components/container-dialog/container-dialog.component';

@Component({
  selector: 'app-step4-otp',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    OtpComponent,
    ContainerDialogComponent,
  ],
  templateUrl: './step4-otp.component.html'
})
export class Step4OtpComponent implements OnInit {
  formOtp!: FormGroup;
  fb = inject(FormBuilder);

  @ViewChild('dlWrapperOtp') dlWrapperOtp!: ContainerDialogComponent;

  ngOnInit(): void {
    this.formOtp = this.fb.group({
      otp: ['']
    });

  }

  onSubmitOtp(): void {
    console.log(this.formOtp.value);
    this.dlWrapperOtp.show();
  }

  onCancel(): void {
    this.formOtp.reset();
  }


  onNext(): void {
    this.formOtp.reset();

  }
}