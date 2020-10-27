import React from 'react';
import { ContactsProvider } from './src/context/contacts-context';
import { ModalProvider } from './src/context/modal-context';

export const wrapRootElement = ({ element }) => (
	<ContactsProvider>
		<ModalProvider>{element}</ModalProvider>
	</ContactsProvider>
);
