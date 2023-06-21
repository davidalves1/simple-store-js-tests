'use client';

import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { Cart } from '@/components/Cart';
import { useCart } from '@/hooks/cartHook';
import { ProductCard } from '@/components/ProductCard';
import { useProducts } from '@/hooks/productsHook';

export default function Home() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  // TODO
  const handleSearch = (term: string) => {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ handleSearch ~ term:', term);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header title="AwStore" />

      <div id="container" className="mx-auto flex flex-nowrap">
        <div id="listing" className="flex flex-col">
          <Search onSearch={handleSearch} />

          <section id="product-listing" className="mx-auto flex max-w-5xl flex-wrap gap-3 px-3 py-8">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </div>

        <Cart />
      </div>
    </main>
  );
}
