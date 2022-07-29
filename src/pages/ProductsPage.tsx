import { useContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { IProduct } from '../models';

import { Product } from '../components/Product';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { CreateProduct } from '../components/CreateProduct';
import { Modal } from '../components/Modal';
import { ModalContext } from '../context/ModalContext';

export const ProductsPage = () => {
  const { products, isLoading, error, addProduct } = useProducts();

  const { open, close, modal } = useContext(ModalContext);

  const createProductHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container max-w-2xl mx-auto pt-5">
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title="Create your own product!" onClose={close}>
          <CreateProduct onCreate={createProductHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 p-5 rounded-full bg-red-400 text-2xl font-bold"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};
