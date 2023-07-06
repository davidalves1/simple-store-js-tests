import Image from 'next/image';
import { Minus, Plus, Trash, XIcon } from 'lucide-react';

import { useCart } from '@/hooks/cartHook';

type CartProps = {};

const cartStyle = {
  show: 'translate-x-0 shadow-[-5px_0px_10px_1px_#00000024]',
  hide: 'translate-x-64 shadow-none',
};

export const Cart = (props: CartProps) => {
  // TODO: separate in small components
  const { cartState, toggleCartView, removeCartItem, increaseCartItem, decreaseCartItem } = useCart();

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
                  <h3 className="mb-1 w-36 overflow-x-hidden overflow-ellipsis whitespace-nowrap">{item.title}</h3>
                  <div className="mb-1 flex gap-1">
                    <p className="text-xs">Qty: {item.quantity}</p>
                    <button
                      className="ml-1 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400"
                      onClick={() => increaseCartItem(item)}
                    >
                      <Plus width={8} height={8} />
                    </button>
                    <button
                      className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400"
                      onClick={() => decreaseCartItem(item)}
                    >
                      <Minus width={8} height={8} />
                    </button>
                  </div>
                  <p className="font-bold">Price: ${item.price}</p>
                </div>
                <button
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400"
                  onClick={() => removeCartItem(item)}
                >
                  <Trash width={12} height={12} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
