import axios from 'axios';
import React, { useState, FC } from 'react';
import { IProduct } from '../models';

import { Error } from './Error';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem yada yada yada',
  category: 'electronic',
  image: 'https://i.pravatar.cc',
  rating: {
    rate: 5,
    count: 10,
  },
  id: 21,
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct: FC<CreateProductProps> = ({ onCreate }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter a valid title!');
    } else {
      productData.title = value;

      const response = await axios.post<IProduct>(
        'https://fakestoreapi.com/products/',
        productData
      );

      onCreate(response.data);
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="w-full p-2 rounded-md border border-gray-300 outline-none mb-2"
        type="text"
        placeholder="Enter a title"
        value={value}
        onChange={inputChangeHandler}
      />
      {error && <Error error={error} />}
      <button
        className="rounded py-2 px-4 bg-gray-500 text-white hover:bg-gray-800"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};
