import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxOption, CheckboxOptions } from '@shared/interfaces/checkbox';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [CheckboxModule, FormsModule, NgClass],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input({ required: true }) label: string = 'Aprobar';
  @Input() type: CheckboxOption = CheckboxOptions.APROBRAR;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<{
    tipo: CheckboxOption;
    checked: boolean;
  }>();

  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit({ tipo: this.type, checked: this.checked });
    }
  }
}
