import React, { useRef, useEffect } from 'react';

import Header from '@/components/header';
import Contacts from '@/components/contacts';

import LocomotiveScroll from 'locomotive-scroll';

import { ContactsProvider } from '@/contacts-context';

import '@/stylesheets/styles.scss';

const Layout = ({ children, className }) => {
	const scrollRef = useRef(null);

	useEffect(() => {
		console.log('scroll');
		const scroll = new LocomotiveScroll({
			el: document.querySelector('#___gatsby'),
			smooth: true,
			smoothMobile: false,
			getDirection: true,
			touchMultiplier: 2.5,
			lerp: 0.15,
		});

		scroll.update();

		window.scroll = scroll;

		scroll.on('scroll', ({ direction }) => {
			document.documentElement.setAttribute('data-direction', direction);
		});

		return () => scroll.destroy();
	}, [scrollRef]);

	return (
		<ContactsProvider el={scrollRef}>
			<div ref={scrollRef}>
				<div id="wrapper" className={`Site-wrapper${className ? ` ${className}` : ''}`}>
					<Header />
					<Contacts />

					<main id="main" className="Main">
						{children}
					</main>
				</div>
			</div>
		</ContactsProvider>
	);
};

export default Layout;
