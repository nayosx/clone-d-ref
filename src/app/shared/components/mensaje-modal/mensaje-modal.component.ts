import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-mensaje-modal',
  imports: [ButtonModule, DialogModule, NgClass, NgStyle],
  templateUrl: './mensaje-modal.component.html',
  styleUrl: './mensaje-modal.component.scss',
})
export class MensajeModalComponent {
  @Input({ required: true }) visible = false;
  @Input() icono: string = 'pi pi-check-circle';
  @Input() iconoColor: string = '#22c55e';
  @Input() titulo: string = 'Título';
  @Input() subtitulo: string = '';
  @Input() reverse: boolean = false;
  @Input() buttonText: string = 'Aceptar';
  @Input() buttonCancel: boolean = false;
  @Input() buttonCancelText: string = 'Cancelar';
  @Output() onAceptar = new EventEmitter<void>();
  @Output() onCancelar = new EventEmitter<void>();

  aceptar() {
    this.visible = false;
    this.onAceptar.emit();
  }

  cancelar() {
    this.visible = false;
    this.onCancelar.emit();
  }
}
