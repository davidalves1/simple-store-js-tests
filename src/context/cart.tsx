'use client';

import { Product, CartProduct } from '@/models/Product';
import { Dispatch, createContext, useReducer } from 'react';

export enum CartActionType {
  TOGGLE = 'TOGGLE',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface CartState {
  open: boolean;
  items: CartProduct[];
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

const QUANTITY_INITIAL_VALUE = 1;

// TODO: extract to a external file???
const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.TOGGLE:
      return { ...state, open: !state.open };
    case CartActionType.ADD_ITEM: {
      const { item: newItem } = action.data || {};
      const { items: stateItems } = state;

      if (!newItem) {
        return state;
      }

      const itemIndex = state.items.findIndex((item) => item.id === action.data?.item.id);

      if (itemIndex < 0) {
        return { ...state, items: [...stateItems, { ...newItem, quantity: QUANTITY_INITIAL_VALUE }] };
      }

      stateItems[itemIndex].quantity = stateItems[itemIndex].quantity + 1;

      return { ...state, items: [...stateItems] };
    }
    case CartActionType.REMOVE_ITEM: {
      const { item } = action.data || {};

      if (!item) {
        return state;
      }

      const items = state.items.filter((i) => i.id !== item.id);

      return { ...state, items: [...items] };
    }
    case CartActionType.INCREASE: {
      const { item } = action.data || {};
      const { items: stateItems } = state;

      if (!item) {
        return state;
      }

      const itemIndex = state.items.findIndex((item) => item.id === action.data?.item.id);

      if (itemIndex < 0) {
        return state;
      }

      stateItems[itemIndex].quantity = stateItems[itemIndex].quantity + 1;

      return { ...state, items: [...stateItems] };
    }
    case CartActionType.DECREASE: {
      const { item } = action.data || {};
      const { items: stateItems } = state;

      if (!item) {
        return state;
      }

      const itemIndex = state.items.findIndex((item) => item.id === action.data?.item.id);

      if (itemIndex < 0 || stateItems[itemIndex].quantity === QUANTITY_INITIAL_VALUE) {
        return state;
      }

      stateItems[itemIndex].quantity = stateItems[itemIndex].quantity - 1;

      return { ...state, items: [...stateItems] };
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
