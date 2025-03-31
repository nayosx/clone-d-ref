import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-input-modal',
  imports: [ButtonModule, DialogModule, TextareaModule],
  templateUrl: './input-modal.component.html',
  styleUrl: './input-modal.component.scss',
})
export class InputModalComponent {
  @Input() visible = false;
  @Input() icono: string = 'pi pi-times-circle';
  @Input() titulo: string = 'Título';
  @Input() label: string = 'Label';
  @Output() onAceptar = new EventEmitter<void>();
  @Output() onOmitir = new EventEmitter<void>();

  aceptar() {
    this.visible = false;
    this.onAceptar.emit();
  }

  omitir() {
    this.visible = false;
    this.onOmitir.emit();
  }
}
