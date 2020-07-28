import React from 'react';
import Header from '@/components/header';

import '@/stylesheets/styles.scss';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />

			{children}
		</div>
	);
};

export default Layout;
