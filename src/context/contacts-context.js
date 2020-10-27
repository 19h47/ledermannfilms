import React, { useState, createContext } from 'react';

const ContactsContext = createContext();

function ContactsProvider({ children }) {
	const [contacts, setContacts] = useState(false);

	const toggleContacts = () => {
		setContacts(!contacts);
	};

	return (
		<ContactsContext.Provider value={{ contacts, setContacts, toggleContacts }}>
			{children}
		</ContactsContext.Provider>
	);
}

export { ContactsProvider, ContactsContext };
