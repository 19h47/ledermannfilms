const React = require('react');

const { ContactsProvider } = require('./src/context/contacts-context').default;
const { ModalProvider } = require('./src/context/modal-context').default;

exports.wrapRootElement = ({ element }) => (
	<ContactsProvider>
		<ModalProvider>{element}</ModalProvider>
	</ContactsProvider>
);
