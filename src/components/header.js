import React from 'react';

import Menu from '@/components/menu';
import SiteName from '@/components/site-name';
import SiteDescription from '@/components/site-description';

import GripLines from '@/assets/svg/grip-lines.inline.svg';

const Header = () => {
	return (
		<header className="Header" data-scroll data-scroll-sticky data-scroll-target="#wrapper">
			<div className="Site-container">
				<div className="row">
					<div className="col-10 col-md-5">
						<SiteName delay="2.3" />
					</div>
					<div className="col-5 d-none d-md-block">
						<SiteDescription delay="2.4" />
					</div>
					<div className="col-4 d-none d-md-block">
						<Menu className="justify-content-end" />
					</div>
					<div className="col-4 d-md-none d-flex justify-content-end align-items-center">
						<button type="button" className="Grip-lines-button">
							<GripLines />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
