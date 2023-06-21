import { useCallback, useState } from 'react';

import { Product } from '@/models/Product';
import { getProducts as getProductsApi } from '@/services/product';

export const useProducts = () => {
  // TODO: change to capture by context
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const products = await getProductsApi();

      setProducts(products.data);
    } catch (err) {
      console.error(`[getProducts] :: ${err}`);
      setError('Unable to get products');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    products,
    loading,
    getProducts,
  };
};
