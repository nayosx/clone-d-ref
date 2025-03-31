import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RadioColor,
  radioColorClasses,
} from '@shared/interfaces/radio.interface';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-radio',
  imports: [RadioButton, FormsModule, NgClass],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) group: string = '';
  @Input({ required: true }) inputId: string = '';
  @Input({ required: true }) value: string | number = '';
  @Input({ required: true }) modelValue: any;
  @Output() modelValueChange = new EventEmitter<any>();
  @Input() size: 'small' | 'large' = 'small';
  @Input() color?: RadioColor;

  get colorClass(): string {
    if (!this.color) return '';
    const baseClass = radioColorClasses[this.color];
    return this.modelValue === this.value
      ? `${baseClass} ${baseClass}-checked`
      : baseClass;
  }

  onModelChange(value: any) {
    this.modelValueChange.emit(value);
  }
}
