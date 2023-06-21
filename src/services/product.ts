import { Product } from '@/models/Product';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export const getProducts = () => api.get<Product[]>('/');

export const getProduct = (productId: number) => api.get<Product>(`/${productId}`);
