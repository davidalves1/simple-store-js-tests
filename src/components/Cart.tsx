import { XIcon } from 'lucide-react';

import { useCart } from '@/hooks/cartHook';
import { CartItem } from './CartItem';
import { useMemo } from 'react';
import { formatCurrency } from '@/utils/numbers';

type CartProps = {};

const cartStyle = {
  show: 'translate-x-0 shadow-[-5px_0px_10px_1px_#00000024]',
  hide: 'translate-x-64 shadow-none',
};

export const Cart = (props: CartProps) => {
  // TODO: separate in small components
  const { cartState, toggleCartView, removeCartItem, increaseCartItem, decreaseCartItem } = useCart();

  const totalValue = useMemo(() => {
    return (cartState.items || []).reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartState.items]);

  return (
    <aside
      id="cart"
      className={`absolute right-0 flex min-h-screen w-64 flex-col bg-slate-100 transition-all duration-500 ${
        cartState.open ? cartStyle.show : cartStyle.hide
      }`}
    >
      <div className="bg-slate-500 px-2 py-3">
        <div className="text-slate-200">
          <XIcon className="cursor-pointer" width={20} onClick={toggleCartView} />
        </div>
        <h2 className="mt-2 text-center text-2xl font-bold text-slate-200">Cart</h2>
      </div>
      <div className="p-2">
        <ul>
          {cartState.items.map((product, i) => (
            <li key={i} className="mb-2">
              <CartItem
                product={product}
                onRemove={removeCartItem}
                onIncrease={increaseCartItem}
                onDecrease={decreaseCartItem}
              />
            </li>
          ))}
          {!!cartState.items.length && (
            <h3 className="text-center text-slate-400">Total: {formatCurrency(totalValue)}</h3>
          )}
        </ul>
      </div>
    </aside>
  );
};
