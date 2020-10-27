const React = require('react');

const { ContactsProvider } = require('./src/context/contacts-context');
const { ModalProvider } = require('./src/context/modal-context');

exports.wrapRootElement = ({ element }) => (
	<ContactsProvider>
		<ModalProvider>{element}</ModalProvider>
	</ContactsProvider>
);
