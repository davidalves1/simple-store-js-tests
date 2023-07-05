import { CartActionType, CartContext } from '@/context/cart';
import { Product } from '@/shared/model/Product';
import { useContext } from 'react';

type UseCartProps = {};

export const useCart = (props: UseCartProps = {}) => {
  const { cartState, dispatch } = useContext(CartContext);

  const toggleCartView = () => {
    dispatch({ type: CartActionType.TOGGLE });
  };

  const addCartItem = (product: Product) => {
    dispatch({ type: CartActionType.ADD_ITEM, data: { item: product } });
  };

  return {
    cartState,
    toggleCartView,
    addCartItem,
  };
};
