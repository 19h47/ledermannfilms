import React from 'react';

import Flag from '@/assets/svg/flag.inline.svg';

function Location() {
	return (
		<div className="Location" data-scroll>
			<div>
				<span style={{ transitionDelay: '1.9s' }}>Based in</span>
			</div>
			<div>
				<span style={{ transitionDelay: '2s' }}>Neuchâtel, CH.</span>
				<Flag style={{ transitionDelay: '2.1s' }} />
			</div>
		</div>
	);
}

export default Location;
