import { CartActionType, CartContext } from '@/context/cart';
import { useContext } from 'react';

type UseCartProps = {};

export const useCart = (props: UseCartProps = {}) => {
  const { cartState, dispatch } = useContext(CartContext);

  const toggleCartView = () => {
    dispatch({ type: CartActionType.TOGGLE });
  };

  const addCartItem = () => {
    dispatch({ type: CartActionType.ADD_ITEM, data: { item: 'FOO BAR' } });
  };

  return {
    cartState,
    toggleCartView,
    addCartItem,
  };
};
