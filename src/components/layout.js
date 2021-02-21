import React from 'react';

import Header from '@/components/header';
import Contacts from '@/components/contacts';
import Navigation from '@/components/navigation';

import '@/stylesheets/styles.scss';

const Layout = ({ children, className }) => (
	<div id="wrapper" className={`Site-wrapper${className ? ` ${className}` : ''}`}>
		<div
			data-scroll
			data-scroll-sticky
			data-scroll-target="#wrapper"
			style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}
		/>

		<Header />

		<Contacts />
		<Navigation />

		<main id="main" className="Main">
			{children}
		</main>
	</div>
);


export default Layout;
