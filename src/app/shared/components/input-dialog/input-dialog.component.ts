import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputDialogData } from '@shared/interfaces/input-dialog.interface';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { IconComponent } from '../icon/icon.component';
import { IconType } from '@shared/interfaces/confirm-dialog.interface';

@Component({
  selector: 'app-input-dialog',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    IconComponent,
  ],
  templateUrl: './input-dialog.component.html',
  styleUrl: './input-dialog.component.scss',
})
export class InputDialogComponent {
  ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig) as InputDialogData;

  icon = (this.config.data.icon ?? 'success') as IconType;
  iconColor = this.config.data.iconColor;
  title = this.config.data.title;
  label = this.config.data.label;
  inputValue = this.config.data.valorAnterior ?? '';

  aceptar() {
    this.ref.close(this.inputValue);
  }

  cancelar() {
    this.ref.close(null);
  }
}
