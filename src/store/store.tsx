import React, { createContext, useReducer, useEffect } from 'react';

import { SetCardDetails, Actions, ActionType } from './actions';
import { ICardDetails } from './types';

interface IStoreState {
  id: number;
  changeValue: number;
  cardDetails: ICardDetails | null;
  isDark: boolean;
}

interface IAppContext {
  state: IStoreState;
  dispatch: React.Dispatch<Actions>;
}

const initialState: IStoreState = {
  id: 1,
  changeValue: 1,
  cardDetails: null,
  isDark: false,
};

const store = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
});

const { Provider } = store;

const reducer = (state: IStoreState, action: Actions) => {
  const { id: count, changeValue, isDark } = state;
  switch (action.type) {
    case ActionType.IncrementId:
      return {
        ...state,
        id: count + changeValue,
      };
    case ActionType.DecrementId:
      return {
        ...state,
        id: count - changeValue,
      };
    case ActionType.SetChangeValue:
      return {
        ...state,
        changeValue: action.payload,
      };
    case ActionType.SetCardDetails:
      return {
        ...state,
        cardDetails: action.payload,
      };
    case ActionType.SetTheme:
      return {
        ...state,
        isDark: !isDark,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useStoreSideEffect(state, dispatch);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useStoreSideEffect = (
  state: IStoreState,
  dispatch: React.Dispatch<Actions>
) => {
  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards/${state.id}`)
      .then(async (res) => {
        const data: { card: ICardDetails } = await res.json();
        dispatch(SetCardDetails(data.card));
      })
      .catch((err) => {
        console.error(`Failed to load card with ID: ${state.id}`);
      });
  }, [state.id, dispatch]);
};

export { store, AppProvider };
