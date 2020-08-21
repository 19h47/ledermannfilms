import React from 'react';

function ButtonScrollTo() {
	const scrollTo = () => window.scroll.scrollTo('#___gatsby', 0);

	return (
		<button type="button" onClick={scrollTo}>
			⏏
		</button>
	);
}

export default ButtonScrollTo;
