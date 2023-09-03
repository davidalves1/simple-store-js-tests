import { useCart } from '@/hooks/cartHook';
import { Product } from '@/models/Product';
import { formatCurrency } from '@/utils/numbers';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addCartItem } = useCart(product);

  const handleAddCartItem = (product: Product) => () => addCartItem(product);

  return (
    <div className="flex h-72 w-60 flex-col justify-between rounded-md border bg-white p-3 shadow-lg transition hover:scale-105">
      <div>
        <h2
          data-test="product-name"
          className="line-clamp-2 h-11 text-ellipsis text-sm font-bold"
          title={product.title}
        >
          {product.title}
        </h2>

        <span className="text-xs text-zinc-400">200 Products</span>
      </div>

      <div id="card-body" className="flex h-40 max-h-40 items-center justify-center rounded-md bg-zinc-50">
        <Image data-test="product-image" src={product.image} alt={product.title} width={85} height={85} />
      </div>

      <div id="car-footer" className="cl flex items-center justify-between">
        <span data-test="product-price" className="text-xs text-zinc-600">
          {formatCurrency(product.price)}
        </span>

        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm transition hover:bg-teal-700"
          onClick={handleAddCartItem(product)}
        >
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
};
