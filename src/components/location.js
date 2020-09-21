import React from 'react';

import Flag from '@/assets/svg/flag.inline.svg';

function Location() {
	return (
		<div className="Hero__location" data-scroll style={{ transitionDelay: '0.9s' }}>
			Based in
			<br />
			Neuchâtel, CH.
			<Flag />
		</div>
	);
}

export default Location;
