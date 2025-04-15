import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { timer, Subscription } from 'rxjs';
import { InputBdComponent } from '../input-bd/input-bd.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-otp',
  imports: [
    CommonModule, 
    FormsModule, 
    InputTextModule,
    ButtonModule
  ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OtpComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => OtpComponent), multi: true }
  ],
  templateUrl: './otp.component.html',
})
export class OtpComponent extends InputBdComponent implements OnInit {
  private static readonly ALLOWED_CHARS = 'A-Za-z0-9';
  private static readonly VALIDATION_REGEX: RegExp = new RegExp(`^[${OtpComponent.ALLOWED_CHARS}]{6}$`);
  private static readonly FILTER_REGEX: RegExp = new RegExp(`[^${OtpComponent.ALLOWED_CHARS}]`, 'g');

  countdown: number = 60;
  private timerSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.startCountdown();
  }
  
  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
  
  startCountdown(): void {
    this.countdown = 60;
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = timer(0, 1000).subscribe(seconds => {
      this.countdown = 60 - seconds;
      if (this.countdown <= 0) {
        this.timerSubscription?.unsubscribe();
      }
    });
  }
  
  get formattedCountdown(): string {
    const minutes = Math.floor(this.countdown / 60);
    const seconds = this.countdown % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  override onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value.replace(OtpComponent.FILTER_REGEX, '');
    this.value = sanitizedValue;
    input.value = sanitizedValue;
    this.onChange(this.value);
  }
  
  override validate(control: AbstractControl): ValidationErrors | null {
    const output = (this.value || '').trim();
    if (output === '') {
      return { required: true };
    }
    if (!OtpComponent.VALIDATION_REGEX.test(output)) {
      return { invalidOtp: true };
    }
    return null;
  }

  onResendOtp(): void {
    this.value = '';
    this.onChange(this.value);
    this.startCountdown();
  }
}
