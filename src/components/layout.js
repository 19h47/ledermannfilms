import React, { useRef, useEffect } from 'react';

import Header from '@/components/header';
import Contacts from '@/components/contacts';
import ContactsMobile from '@/components/contacts-mobile';

import LocomotiveScroll from 'locomotive-scroll';

import { ScrollProvider } from '@/context/scroll-context';
import { ContactsProvider } from '@/context/contacts-context';

import useWindowSizes from '@/hooks/use-window-sizes';

import '@/stylesheets/styles.scss';

const Layout = ({ children, className }) => {
	const scrollRef = useRef(null);
	const { width, height } = useWindowSizes();

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			touchMultiplier: 2.5,
			lerp: 0.15,
		});

		scroll.update();

		global.scroll = scroll;

		// scroll.on('scroll', ({ direction }) => {
		// 	document.documentElement.setAttribute('data-direction', direction);
		// });

		scroll.on('call', (value, way, obj) => {
			const $projectCategories = document.querySelector('.js-project-categories');

			if ($projectCategories && value === 'footer') {
				if (way === 'enter') {
					$projectCategories.classList.remove('is-active');
				} else {
					$projectCategories.classList.add('is-active');
				}
			}
		});

		return () => scroll.destroy();
	}, [height, scrollRef]);

	return (
		<ScrollProvider el={scrollRef}>
			{width < 784 && <ContactsMobile />}
			<div ref={scrollRef} data-scroll-container>
				<div id="wrapper" className={`Site-wrapper${className ? ` ${className}` : ''}`}>
					<div
						id="modal-root"
						data-scroll
						data-scroll-sticky
						data-scroll-target="#wrapper"
						style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}
					/>
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
