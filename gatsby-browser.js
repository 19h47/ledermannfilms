import React from 'react';

import { ContactsProvider } from './src/context/contacts-context';
import { NavigationProvider } from './src/context/navigation-context';
import { ModalProvider } from './src/context/modal-context';

export const wrapRootElement = ({ element }) => (
	<ContactsProvider>
		<NavigationProvider >
			<ModalProvider>{element}</ModalProvider>
		</NavigationProvider>
	</ContactsProvider>
);
