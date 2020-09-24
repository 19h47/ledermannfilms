import React, { createContext } from 'react';

import useModal from '@/hooks/use-modal';
import Modal from '@/components/modal';

const ModalContext = createContext();

function ModalProvider({ children }) {
	const { modal, handleModal, modalContent } = useModal();

	return (
		<ModalContext.Provider value={{ modal, handleModal, modalContent }}>
			<Modal />
			{children}
		</ModalContext.Provider>
	);
}

export { ModalProvider, ModalContext };
