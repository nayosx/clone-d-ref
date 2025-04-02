import { Confirmation } from 'primeng/api';

export type IconType = 'success' | 'error' | 'warning' | 'send';

export interface ConfirmationMessage extends Confirmation {
  type?: IconType;
  title?: string;
  reverse?: boolean;
  estilos?: {
    iconSize?: string;
    color?: string;
  };
}
