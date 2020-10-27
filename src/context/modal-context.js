import React, { useState, createContext } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return <ModalContext.Provider value={{ modal, toggleModal }}>{children}</ModalContext.Provider>;
}

export { ModalProvider, ModalContext };
