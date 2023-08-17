import { CartProduct } from '@/models/Product';
import { formatCurrency } from '@/utils/numbers';
import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';

interface CartItemProps {
  product: CartProduct;
  onIncrease: (product: CartProduct) => void;
  onDecrease: (product: CartProduct) => void;
  onRemove: (product: CartProduct) => void;
}

export const CartItem = ({ product, onIncrease, onDecrease, onRemove }: CartItemProps) => {
  const handleIncrease = (product: CartProduct) => () => onIncrease(product);
  const handleDecrease = (product: CartProduct) => () => onDecrease(product);
  const handleRemove = (product: CartProduct) => () => onRemove(product);

  return (
    <div className="flex h-20 flex-nowrap items-center gap-1 rounded-sm bg-white p-1 shadow-sm">
      <div className="w-14">
        <Image src={product.image} alt={product.title} width={45} height={45} className="max-h-14" />
      </div>

      <div className="flex-1 text-sm">
        <h3 className="mb-1 w-36 overflow-x-hidden overflow-ellipsis whitespace-nowrap">{product.title}</h3>

        <div className="mb-1 flex gap-1">
          <p className="text-xs">Qty: {product.quantity}</p>

          <button
            className="ml-1 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400"
            onClick={handleIncrease(product)}
          >
            <Plus width={8} height={8} />
          </button>

          <button
            className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400"
            onClick={handleDecrease(product)}
          >
            <Minus width={8} height={8} />
          </button>
        </div>

        <p className="font-bold">Price: {formatCurrency(product.price)}</p>
      </div>

      <button
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-slate-300 shadow-sm transition-all hover:bg-slate-400"
        onClick={handleRemove(product)}
      >
        <Trash width={12} height={12} />
      </button>
    </div>
  );
};
