import { IProduct } from '../models';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setProducts((prevState) => [product, ...prevState]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get<IProduct[]>(
          'https://fakestoreapi.com/products?limit=10'
        );

        setIsLoading(false);
        setProducts(response.data);
      } catch (e) {
        const error = e as AxiosError;
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error, addProduct };
};
