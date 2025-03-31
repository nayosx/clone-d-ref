import { Confirmation } from 'primeng/api';

export interface ConfirmationMessage extends Confirmation {
  type?: 'success' | 'warning' | 'danger';
  title?: string;
  reverse?: boolean;
  estilos?: {
    iconSize?: string;
    color?: string;
  };
}
