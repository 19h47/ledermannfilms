import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export const Wrap = ({ children }) => {
	const containerRef = useRef(null);

	return (
		<LocomotiveScrollProvider
			options={{ smooth: true }}
			containerRef={containerRef}
			watch={[children]}>
			<main data-scroll-container ref={containerRef}>
				{children}
			</main>
		</LocomotiveScrollProvider>
	);
};
