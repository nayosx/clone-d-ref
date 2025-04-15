import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';
import { InputBdComponent } from '../input-bd/input-bd.component';


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
export class InputDuiNitComponent extends InputBdComponent {

  @Input() isOnlyDUI: boolean = false;
  @Input() isOnlyNIT: boolean = false;

  override onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value.replace(/\D/g, '');
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  override validate(control: AbstractControl): ValidationErrors | null {
    const output = this.value || '';
    if (output.trim() === '') {
      return { required: true };
    }
    const len = output.length;
    if (len !== 9 && len !== 14) {
      return { invalidFormat: true };
    }
    return null;
  }
}