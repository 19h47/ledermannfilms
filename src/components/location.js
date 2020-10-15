import React from 'react';

import Flag from '@/assets/svg/flag.inline.svg';

function Location() {
	return (
		<div className="Location" data-scroll>
			<Flag style={{ transitionDelay: '1.9s' }} className="d-md-none" />
			<div>
				<span style={{ transitionDelay: '1.7s' }}>Based in</span>
			</div>
			<div>
				<span style={{ transitionDelay: '1.8s' }}>Neuchâtel, CH.</span>
				<Flag style={{ transitionDelay: '1.9s' }} className="d-none d-md-block" />
			</div>
		</div>
	);
}

export default Location;
