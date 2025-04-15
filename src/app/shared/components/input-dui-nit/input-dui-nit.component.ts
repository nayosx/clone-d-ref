import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-input-dui-nit',
  providers: [
    provideNgxMask(),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDuiNitComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputDuiNitComponent),
      multi: true
    }
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    NgxMaskDirective,
    InputTextModule,
  ],
  templateUrl: './input-dui-nit.component.html',
})
export class InputDuiNitComponent implements ControlValueAccessor, Validator {
  duiornit: string = '';
  @Input() classNames: string = '';
  @Input() isOnlyDUI: boolean = false;
  @Input() isOnlyNIT: boolean = false;
  @Input() label: string = 'Change me!';
  @Input() placeholder: string = 'Change me!';

  @Output() duiNitChange = new EventEmitter<string>();

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.duiornit = value || '';
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
    this.duiornit = input.value.replace(/\D/g, '');
    this.onChange(this.duiornit);
    this.duiNitChange.emit(this.duiornit);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = this.duiornit || '';
    if (value.trim() === '') {
      return { required: true };
    }
    const len = value.length;
    if (len !== 9 && len !== 14) {
      return { invalidFormat: true };
    }
    return null;
  }
}