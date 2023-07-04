import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  onToggleCartView: () => void;
  totalCartItems: number;
}

export const CartButton = (props: CartButtonProps) => {
  return (
    <button
      onClick={props.onToggleCartView}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 shadow-sm"
    >
      {!!props.totalCartItems && (
        <div
          data-test="cart-badge"
          className="absolute mx-auto h-3 w-3 -translate-y-3 translate-x-3 rounded-full bg-red-600  text-center align-middle text-[8px] text-white"
        >
          {props.totalCartItems}
        </div>
      )}
      <ShoppingCart size={16} />
    </button>
  );
};
