import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-otp',
  imports: [CommonModule, FormsModule, InputTextModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OtpComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => OtpComponent),
      multi: true
    }
  ],
  templateUrl: './otp.component.html',
})
export class OtpComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  otp: string = '';
  countdown: number = 60;
  private timerSubscription: Subscription | null = null;

  onChange = (_: any) => {};
  onTouched = () => {};

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

  writeValue(value: any): void {
    this.otp = value || '';
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {}

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.otp = input.value;
    this.onChange(this.otp);
  }
  
  validate(control: AbstractControl): ValidationErrors | null {
    const value = this.otp || '';
    if (value.trim() === '') {
      return { required: true };
    }
    if (value.length !== 6) {
      return { invalidOtp: true };
    }
    return null;
  }

  onResendOtp(): void {
    this.otp = '';
    this.onChange(this.otp);
    this.startCountdown();
  }
}