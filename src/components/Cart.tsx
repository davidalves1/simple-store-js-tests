import { useCart } from '@/hooks/cartHook';
import { XIcon } from 'lucide-react';

type CartProps = {};

const cartStyle = {
  show: 'translate-x-0 shadow-[-5px_0px_10px_1px_#00000024]',
  hide: 'translate-x-64 shadow-none',
};

export const Cart = (props: CartProps) => {
  const { cartState, toggleCartView } = useCart();

  return (
    <aside
      id="cart"
      className={`absolute right-0 flex min-h-screen w-64 flex-col bg-white p-2 transition-all duration-500 ${
        cartState.open ? cartStyle.show : cartStyle.hide
      }`}
    >
      <div className="text-slate-500">
        <XIcon className="cursor-pointer" onClick={toggleCartView} />
      </div>

      <h2>Cart</h2>

      <ul>
        {cartState.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};
