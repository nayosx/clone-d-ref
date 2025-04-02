import { IconType } from './confirm-dialog.interface';

export interface InputDialogData {
  data: {
    icon?: IconType;
    iconColor?: string;
    title?: string;
    label?: string;
    valorAnterior?: string;
  };
}
