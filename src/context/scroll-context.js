import React, { createContext } from 'react';

const ScrollContext = createContext();

function ScrollProvider({ el, scroll, children }) {
	return <ScrollContext.Provider value={{ el }}>{children}</ScrollContext.Provider>;
}

export { ScrollProvider, ScrollContext };
