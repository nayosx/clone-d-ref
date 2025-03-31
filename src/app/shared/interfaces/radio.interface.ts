export type RadioColor = 'pink' | 'green' | 'gray' | 'yellow';

export const radioColorClasses: Record<RadioColor, string> = {
  pink: 'radio-pink',
  green: 'radio-green',
  gray: 'radio-gray',
  yellow: 'radio-yellow',
};

export interface RadioOption {
  color: RadioColor;
  label: string;
  group: string;
  inputId?: string;
  value: string;
}
