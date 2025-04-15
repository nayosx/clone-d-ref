import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-bd',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBdComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputBdComponent),
      multi: true
    }
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
  ],
  template: `<p>input-bd works!</p>`,
})
export class InputBdComponent implements ControlValueAccessor, Validator{

  @Input() label: string = 'Change me!';
  @Input() placeholder: string = 'Change me!';
  @Input() classNames: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  value: string = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(arg: any): void {
    this.value = arg || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  onInputChange(event: Event): void {}

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

}
