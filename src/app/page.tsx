'use client';

import { ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';

export default function Home() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => console.log('🚀 ~ useEffect ~ products:', data))
      .catch((err) => console.log('🚀 ~ useEffect ~ err:', err));
  }, []);

  const handleSearch = (term: string) => {
    console.log('🚀 ~ handleSearch ~ term:', term);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header title="AwStore" />

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="max-w-full"
                src="https://www.worten.pt/i/c524cb4b199daed6541497b6109f2b105f5f9278.jpg"
                alt="Tenis Nike"
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
    </main>
  );
}
