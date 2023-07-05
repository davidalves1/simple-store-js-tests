'use client';

import { ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { Cart } from '@/components/Cart';
import { useCart } from '@/hooks/cartHook';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => console.log('🚀 ~ useEffect ~ products:', data))
      .catch((err) => console.log('🚀 ~ useEffect ~ err:', err));
  }, []);

  // TODO: remove
  const { addCartItem } = useCart();

  // TODO
  const handleSearch = (term: string) => {
    console.log('🚀 ~ handleSearch ~ term:', term);
  };

  // TODO: remove
  const handleAddCartItem = () => {
    addCartItem({
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header title="AwStore" />

      <div id="container" className="mx-auto flex flex-nowrap">
        <div id="listing" className="flex flex-col">
          <button data-test="search-button" onClick={handleAddCartItem} className="h-10 rounded-md bg-yellow-500 px-3">
            Search
          </button>
          <Search onSearch={handleSearch} />

          <section id="product-listing" className="mx-auto flex max-w-5xl flex-wrap gap-3 px-3 py-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                id="product-card"
                key={i}
                className="flex h-72 w-60 flex-col justify-between rounded-md border p-3 shadow-lg transition hover:scale-105"
              >
                <div id="card-header">
                  <h2 className="font-bold">Nike Sneakers</h2>
                  <span className="text-xs text-zinc-400">200 Products</span>
                </div>
                <div id="card-body" className="flex h-40 items-center justify-center bg-zinc-100">
                  <Image
                    className="max-w-full"
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt="Tenis Nike"
                    width={100}
                    height={100}
                  />
                </div>
                <div id="car-footer" className="cl flex items-center justify-between">
                  <span className="text-xs text-zinc-600">$99.90</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white shadow-sm transition hover:bg-teal-700">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>

        <Cart />
      </div>
    </main>
  );
}
