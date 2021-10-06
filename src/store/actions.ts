import { ICardDetails } from './types';

export enum ActionType {
  IncrementId = 'counter/increment',
  DecrementId = 'counter/decrement',
  SetChangeValue = 'value/change/set',
  SetCardDetails = 'api/set',
  SetTheme = 'theme/set',
}

interface IIncrementId {
  type: ActionType.IncrementId;
}

interface IDecrementId {
  type: ActionType.DecrementId;
}

interface ISetChangeValue {
  type: ActionType.SetChangeValue;
  payload: number;
}

interface ISetCardDetails {
  type: ActionType.SetCardDetails;
  payload: ICardDetails;
}

interface ISetTheme {
  type: ActionType.SetTheme;
}

export type Actions =
  | IIncrementId
  | IDecrementId
  | ISetChangeValue
  | ISetCardDetails
  | ISetTheme;

export const IncrementId = (): IIncrementId => ({
  type: ActionType.IncrementId,
});

export const DecrementId = (): IDecrementId => ({
  type: ActionType.DecrementId,
});

export const SetChangeValue = (value: number): ISetChangeValue => ({
  type: ActionType.SetChangeValue,
  payload: value,
});

export const SetCardDetails = (response: ICardDetails): ISetCardDetails => ({
  type: ActionType.SetCardDetails,
  payload: response,
});

export const SetTheme = (): ISetTheme => ({
  type: ActionType.SetTheme,
});
