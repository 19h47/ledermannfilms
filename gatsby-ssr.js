import React from 'react';

import { ContactsProvider } from './src/context/contacts-context';
import { ModalProvider } from './src/context/modal-context';

exports.wrapRootElement = ({ element }) => (
	<ContactsProvider>
		<ModalProvider>{element}</ModalProvider>
	</ContactsProvider>
);
