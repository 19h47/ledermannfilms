import React, { useState, createContext } from 'react';

const initialState = {
	active: false,
	handleContacts: () => {},
};

const ContactsContext = createContext(initialState);

function ContactsProvider({ children }) {
	const [active, setActive] = useState(false);

	const handleContacts = () => {
		const isActive = !active;

		console.log(active);

		setActive(isActive);
	};

	return (
		<ContactsContext.Provider value={{ active, setActive, handleContacts }}>
			{children}
		</ContactsContext.Provider>
	);
}

export { ContactsProvider, ContactsContext };
