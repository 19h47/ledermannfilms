import React, { useRef, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

import LocomotiveScroll from 'locomotive-scroll';

// import Scroll from '@/components/scroll';

import '@/stylesheets/styles.scss';

const Layout = ({ children }) => {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			smoothMobile: false,
			getDirection: true,
			touchMultiplier: 2.5,
			lerp: 0.15,
		});

		return () => {
			if (scroll) {
				scroll.update();
			}
		};
	}, []);

	return (
		<div ref={scrollRef}>
			<div id="wrapper" className="Site-wrapper">
				<Header />

				<main id="main" className="Main">
					{children}
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
