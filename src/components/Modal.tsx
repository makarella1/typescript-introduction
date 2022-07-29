import { FC } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children?: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, title, onClose }) => {
  return (
    <>
      {createPortal(
        <div
          className="fixed bg-black opacity-70 top-0 left-0 bottom-0 right-0 z-40"
          onClick={onClose}
        />,
        document.getElementById('modal') as HTMLElement
      )}
      {createPortal(
        <div className="absolute top-20 w-[500px] left-1/2 -translate-x-1/2 bg-white rounded p-6 z-50">
          <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
          {children}
        </div>,
        document.getElementById('modal') as HTMLElement
      )}
    </>
  );
};
