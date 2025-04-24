import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardWrapper } from '@shared/interfaces/card-wrapper.interface';
import { ContainerCardWrapperComponent } from "../container-card-wrapper/container-card-wrapper.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-container-dialog',
  imports: [
    ContainerCardWrapperComponent,
    DialogModule,
    ButtonModule,
  ],
  templateUrl: './container-dialog.component.html',
  styleUrl: './container-dialog.component.scss'
})
export class ContainerDialogComponent {
  
  @Output() next = new EventEmitter<void>();

  @Input() wrapper:CardWrapper = {
    icon: null,
    title: 'Default Title Dialog',
    description: 'Default description from Dialog for the card info component.'
  };

  visible: boolean = false;


  show(): void {
    this.visible = true;
  }

  onNext(): void {
    this.visible = false;
    this.next.emit();
  }
}
