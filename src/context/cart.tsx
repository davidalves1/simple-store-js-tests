'use client';

import { Dispatch, createContext, useReducer } from 'react';

export enum CartActionType {
  TOGGLE = 'TOGGLE',
}

interface CartState {
  open: boolean;
}

interface CartAction {
  type: CartActionType;
}

const initialState: CartState = {
  open: false,
};

const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.TOGGLE:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

export const CartContext = createContext<{
  cartState: CartState;
  dispatch: Dispatch<CartAction>;
}>({ cartState: initialState, dispatch: () => null });

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
};
