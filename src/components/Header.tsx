import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  onToggleCartView: () => void;
}

export const Header = ({ title, onToggleCartView }: HeaderProps) => (
  <header data-test="header" className="z-10 flex h-12 items-center justify-between bg-slate-400 px-4">
    <Link href="/">
      <span data-test="header-title" className="text-xl font-bold">
        {title}
      </span>
    </Link>
    <button
      data-test={'header-cart-button'}
      onClick={onToggleCartView}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 shadow-sm"
    >
      <ShoppingCart size={16} />
    </button>
  </header>
);
