import React, { useState, createContext } from 'react';

const initialState = {
	active: false,
	toggle: () => { },
};

const MenuContext = createContext(initialState);

function MenuProvider({ children }) {
	const [active, setActive] = useState(false);

	const toggle = () => {
		const isActive = !active;

		setActive(isActive);
	};

	return <MenuContext.Provider value={{ active, toggle }}>{children}</MenuContext.Provider>;
}

export { MenuProvider, MenuContext };
