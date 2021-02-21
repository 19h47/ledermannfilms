import React, { useRef, Fragment } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export const Wrap = ({ children }) => {
	const containerRef = useRef(null)

	return <Fragment>
		<LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef} watch={[]}>
			<main data-scroll-container ref={containerRef}>
				{children}
			</main>
		</LocomotiveScrollProvider>
	</Fragment>
}
