import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import Header from '@/components/header';
import Contacts from '@/components/contacts';
import Navigation from '@/components/navigation';




import '@/stylesheets/styles.scss';

const Layout = ({ children, className }) => {

	if (typeof window !== `undefined`) {
		const { scroll } = useLocomotiveScroll();

		scroll.on('call', (value, way, obj) => {
			const $projectCategories = global.document.querySelector('.js-project-categories');

			if ($projectCategories && value === 'footer') {
				if (way === 'enter') {
					$projectCategories.classList.remove('is-active');
				}
				if (way === 'exit') {
					$projectCategories.classList.add('is-active');
				}
			}
		});
	}


	return (
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
};

export default Layout;
