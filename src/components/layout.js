import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Header from '@/components/header';
import Contacts from '@/components/contacts';
import Navigation from '@/components/navigation';

import '@/stylesheets/styles.scss';

const Layout = ({ children, className }) => {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: false,
		});

		global.scroll = scroll;

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

		return () => scroll && scroll.destroy();
	}, []);

	return (
		<div ref={scrollRef} >
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
		</div>
	);
};

export default Layout;
