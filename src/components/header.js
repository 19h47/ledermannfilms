import React from 'react';

import Menu from '@/components/menu';
import SiteName from '@/components/site-name';
import SiteDescription from '@/components/site-description';

const Header = () => {
	return (
		<header className="Header" data-scroll data-scroll-sticky data-scroll-target="#wrapper">
			<div className="Site-container">
				<div className="row">
					<div className="col-10 col-md-5">
						<SiteName delay="0.04" />
					</div>
					<div className="col-5 d-none d-md-block">
						<SiteDescription delay="0.4" />
					</div>
					<div className="col-4 d-none d-md-block">
						<Menu className="justify-content-end" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
