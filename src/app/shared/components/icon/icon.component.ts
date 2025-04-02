import { NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorIconComponent } from '@shared/icons/error-icon.component';
import { SendIconComponent } from '@shared/icons/send-icon.component';
import { SuccessIconComponent } from '@shared/icons/success-icon.component';
import { WarningIconComponent } from '@shared/icons/warning-icon.component';
import { IconType } from '@shared/interfaces/confirm-dialog.interface';

@Component({
  selector: 'app-icon',
  imports: [NgComponentOutlet],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() typeIcon: IconType = 'success';

  private icons: Record<IconType, any> = {
    success: SuccessIconComponent,
    error: ErrorIconComponent,
    send: SendIconComponent,
    warning: WarningIconComponent,
  };

  getIconComponent(type: IconType) {
    console.log(type);

    return this.icons[type] ?? SuccessIconComponent;
  }
}
