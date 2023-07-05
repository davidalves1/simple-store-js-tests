import Image from 'next/image';
import { Trash, XIcon } from 'lucide-react';

import { useCart } from '@/hooks/cartHook';

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
          {cartState.items.map((item, i) => (
            <li key={i} className="mb-2">
              <div
                id="cart-item"
                className="flex h-20 flex-nowrap items-center gap-1 rounded-sm bg-white p-1 shadow-sm"
              >
                <div className="w-14">
                  <Image src={item.image} alt={item.title} width={50} height={50} />
                </div>
                <div className="flex-1 text-sm">
                  <h3 className="w-32 overflow-x-hidden overflow-ellipsis whitespace-nowrap">{item.title}</h3>
                  <p className="text-xs">Qty: 1</p>
                  <p className="font-bold">Price: ${item.price}</p>
                </div>
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400">
                  <Trash width={12} height={12} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
