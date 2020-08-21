import React, { useState, createContext } from 'react';

const initialState = {
	active: false,
	toggle: () => {},
};

const ContactsContext = createContext(initialState);

function ContactsProvider({ children }) {
	const [active, setActive] = useState(false); // Default contacts is inactive

	// To toggle between on and off modes
	const toggle = () => {
		const isActive = !active;

		setActive(isActive);
	};

	return (
		<ContactsContext.Provider value={{ active, toggle }}>{children}</ContactsContext.Provider>
	);
}

export { ContactsProvider, ContactsContext };
