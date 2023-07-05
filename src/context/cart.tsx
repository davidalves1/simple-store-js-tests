'use client';

import { Product } from '@/shared/model/Product';
import { Dispatch, createContext, useReducer } from 'react';

export enum CartActionType {
  TOGGLE = 'TOGGLE',
  ADD_ITEM = 'ADD_ITEM',
}

interface CartState {
  open: boolean;
  items: Product[];
}

interface CartAction {
  type: CartActionType;
  data?: {
    item: Product;
  };
}

const initialState: CartState = {
  open: false,
  items: [],
};

// TODO: extract to a external file???
const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.TOGGLE:
      return { ...state, open: !state.open };
    case CartActionType.ADD_ITEM: {
      if (!action?.data?.item) {
        return state;
      }

      return { ...state, items: [...state.items, action.data.item] };
    }
    default:
      return state;
  }
};

export interface CartContextType {
  cartState: CartState;
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType>({ cartState: initialState, dispatch: () => null });

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
};
