import React from 'react';

import { Wrap } from './src/components/wrap';

import { ContactsProvider } from './src/context/contacts-context';
import { NavigationProvider } from './src/context/navigation-context';
import { ModalProvider } from './src/context/modal-context';

export const wrapRootElement = ({ element }) => (
	<Wrap>
		<ContactsProvider>
			<NavigationProvider >
				<ModalProvider>
					{element}
				</ModalProvider>
			</NavigationProvider>
		</ContactsProvider>
	</Wrap>
);
