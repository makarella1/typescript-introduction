import { useState, FC } from 'react';

import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
  const [details, setDetails] = useState(false);

  const toggleDetailsHandler = () => {
    setDetails((prevState) => !prevState);
  };

  const btnBgClasses = details ? 'bg-neutral-500' : 'bg-gray-800';

  const btnClassName = ['rounded text-white px-4 py-2', btnBgClasses];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold mb-4">${product.price}</span>
      <button className={btnClassName.join(' ')} onClick={toggleDetailsHandler}>
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div className="w-2/3 my-4">
          <p className="mb-2">{product.description}</p>
          <p>
            Rating: <span className="font-bold">{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
