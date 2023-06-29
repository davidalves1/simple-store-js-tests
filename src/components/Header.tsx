'use client';

import { useCart } from '@/hooks/cartHook';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const { cartState, toggleCartView } = useCart();

  return (
    <header data-test="header" className="z-10 flex h-12 items-center justify-between bg-slate-400 px-4">
      <Link href="/">
        <span data-test="header-title" className="text-xl font-bold">
          {title}
        </span>
      </Link>
      <button
        data-test={'header-cart-button'}
        onClick={toggleCartView}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 shadow-sm"
      >
        {!!cartState.items.length && (
          <div
            id="badge"
            className="absolute mx-auto h-3 w-3 -translate-y-3 translate-x-3 rounded-full bg-red-600  text-center align-middle text-[8px] text-white"
          >
            {cartState.items.length}
          </div>
        )}
        <ShoppingCart size={16} />
      </button>
    </header>
  );
};
