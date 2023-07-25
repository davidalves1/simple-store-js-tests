import { CartActionType, CartContext } from '@/context/cart';
import { Product } from '@/models/Product';
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

  const removeCartItem = (product: Product) => {
    dispatch({ type: CartActionType.REMOVE_ITEM, data: { item: product } });
  };

  const increaseCartItem = (product: Product) => {
    dispatch({ type: CartActionType.INCREASE, data: { item: product } });
  };

  const decreaseCartItem = (product: Product) => {
    dispatch({ type: CartActionType.DECREASE, data: { item: product } });
  };

  return {
    cartState,
    toggleCartView,
    addCartItem,
    removeCartItem,
    increaseCartItem,
    decreaseCartItem,
  };
};
