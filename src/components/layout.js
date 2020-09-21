import React, { useRef, useEffect } from 'react';

import Header from '@/components/header';
import Contacts from '@/components/contacts';
import ContactsMobile from '@/components/contacts-mobile';

import LocomotiveScroll from 'locomotive-scroll';

import { ScrollProvider } from '@/context/scroll-context';
import { ContactsProvider } from '@/context/contacts-context';

import useWindowWidth from '@/hooks/use-window-width';

import '@/stylesheets/styles.scss';

const Layout = ({ children, className }) => {
	const scrollRef = useRef(null);
	const width = useWindowWidth();

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			touchMultiplier: 2.5,
			lerp: 0.15,
		});

		scroll.update();

		window.scroll = scroll;

		// scroll.on('scroll', ({ direction }) => {
		// 	document.documentElement.setAttribute('data-direction', direction);
		// });

		return () => scroll.destroy();
	}, [scrollRef]);

	return (
		<ScrollProvider el={scrollRef}>
			{width < 784 && <ContactsMobile />}
			<div ref={scrollRef} data-scroll-container>
				<div id="wrapper" className={`Site-wrapper${className ? ` ${className}` : ''}`}>
					<ContactsProvider>
						<Header />
						{width > 785 && <Contacts />}

						<main id="main" className="Main">
							{children}
						</main>
					</ContactsProvider>
				</div>
			</div>
		</ScrollProvider>
	);
};

export default Layout;
