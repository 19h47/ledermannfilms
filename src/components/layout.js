import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

import Scroll from '@/components/scroll';

import '@/stylesheets/styles.scss';

const Layout = ({ children, location }) => (
	<>
		<div id="wrapper" className="Site-wrapper">
			<Header />

			<Scroll callbacks={location} />

			<main id="main" className="Main">
				{children}
			</main>
		</div>
		<Footer />
	</>
);

export default Layout;
