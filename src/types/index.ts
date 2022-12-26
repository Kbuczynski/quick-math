export enum OperationType {
  ADDING = '+',
  SUBTRACTING = '-',
  MULTIPLY = '*',
  DIVISION = '/',
}

export interface Settings {
  requiredScore: number
  minNumber: number
  maxNumber: number
  timeToAdd: number
  timeToSub: number
}
