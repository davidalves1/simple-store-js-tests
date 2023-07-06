'use client';

import { useCart } from '@/hooks/cartHook';
import Link from 'next/link';
import { CartButton } from './CartButton';

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
      <CartButton totalCartItems={cartState.items.length} onToggleCartView={toggleCartView} />
    </header>
  );
};
