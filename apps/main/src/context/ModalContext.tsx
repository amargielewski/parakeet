import { createContext, useState, PropsWithChildren } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-types
export type ModalContextProviderProps = PropsWithChildren<{}>;

export type ModalContextValue = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
};

export const ModalContext = createContext({} as ModalContextValue);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
