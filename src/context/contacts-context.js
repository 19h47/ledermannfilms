import React, { useState, createContext } from 'react';

const initialState = {
	contacts: false,
	handleContacts: () => {},
};

const ContactsContext = createContext(initialState);

function ContactsProvider({ children }) {
	const [contacts, setContacts] = useState(false);

	const handleContacts = () => {
		setContacts(!contacts);
	};

	return (
		<ContactsContext.Provider value={{ contacts, setContacts, handleContacts }}>
			{children}
		</ContactsContext.Provider>
	);
}

export { ContactsProvider, ContactsContext };
