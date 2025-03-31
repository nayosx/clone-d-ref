import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [ConfirmDialogModule, NgStyle],
})
export class ConfirmDialogComponent {
  constructor(public confirmationService: ConfirmationService) {}
}
