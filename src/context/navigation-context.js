import React, { useState, createContext } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
	const [navigation, setNavigation] = useState(false);

	const toggleNavigation = () => {
		setNavigation(!navigation);
	};

	return (
		<NavigationContext.Provider value={{ navigation, setNavigation, toggleNavigation }}>
			{children}
		</NavigationContext.Provider>
	);
}

export { NavigationProvider, NavigationContext };
