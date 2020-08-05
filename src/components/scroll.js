import { useEffect } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

const Scroll = callbacks => {
	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('#___gatsby'),
			// smooth: true,
			smoothMobile: false,
			getDirection: true,
			touchMultiplier: 2.5,
			lerp: 0.15,
		});

		scroll.update();

		// Exposing to the global scope for ease of use.
		window.scroll = scroll;

		scroll.on('scroll', ({ direction }) => {
			// Update `data-direction` with scroll direction.
			document.documentElement.setAttribute('data-direction', direction);
		});

		return () => {
			if (scroll) {
				scroll.destroy();
			}
		};
	}, [callbacks]);

	return null;
};

export default Scroll;
