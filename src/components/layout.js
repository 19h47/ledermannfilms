import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

import '@/stylesheets/styles.scss';

const Layout = ({ children }) => {
	return (
		<div>
			<div className="Site-wrapper">
				<Header />

				<main className="Main">{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
