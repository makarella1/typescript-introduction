import { createContext, FC, useState } from 'react';

interface ModalContextProps {
  children: React.ReactNode;
}

interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});

export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
  const [modal, setModal] = useState(false);

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
