import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

import Scroll from '@/components/scroll';

import '@/stylesheets/styles.scss';

const Layout = ({ children, location }) => {
	return (
		<div>
			<div className="Site-wrapper">
				<Header />

				<Scroll callbacks={location} />

				<main className="Main">{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
