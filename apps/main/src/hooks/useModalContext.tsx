import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};
