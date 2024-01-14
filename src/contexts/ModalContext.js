import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

// eslint-disable-next-line react/prop-types
export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);

  const toggleModal = (type = null) => {
    setModalType(type);
  };

  return <ModalContext.Provider value={{ modalType, toggleModal }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
