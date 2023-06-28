'use client';

import { Dispatch, createContext, useReducer } from 'react';

export enum CartActionType {
  TOGGLE = 'TOGGLE',
  ADD_ITEM = 'ADD_ITEM',
}

interface CartState {
  open: boolean;
  items: string[];
}

interface CartAction {
  type: CartActionType;
  data: {
    [key: string]: unknown;
  };
}

const initialState: CartState = {
  open: false,
  items: [],
};

const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.TOGGLE:
      return { ...state, open: !state.open };
    case CartActionType.ADD_ITEM:
      return { ...state, items: [...state.items, action.data.item] };
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
