export const CheckboxOptions = {
  APROBRAR: 'aprobar',
  RECHAZAR: 'rechazar',
} as const;

export type CheckboxOption =
  (typeof CheckboxOptions)[keyof typeof CheckboxOptions];
