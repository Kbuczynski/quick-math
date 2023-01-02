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

export interface UserType {
  id: string
  name: string
  password: string
  score: number
}
