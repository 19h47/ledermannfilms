import React, { useContext } from 'react';

import Menu from '@/components/menu';
import SiteName from '@/components/site-name';
import SiteDescription from '@/components/site-description';

import GripLines from '@/assets/svg/grip-lines.inline.svg';

import { NavigationContext } from '@/context/navigation-context';

const Header = () => {
	const { toggleNavigation } = useContext(NavigationContext);

	return (
		<header className="Header" data-scroll data-scroll-sticky data-scroll-target="#wrapper">
			<div className="Site-container">
				<div className="row">
					<div className="col-10 col-lg-5">
						<SiteName delay="2.1" classes={['margin-left-2']} />
					</div>
					<div className="col-6 col-lg-5 d-none d-lg-block">
						<SiteDescription delay="2.2" />
					</div>
					<div className="col-4 d-none d-lg-block">
						<Menu className="justify-content-end" />
					</div>
					<div className="col-4 d-lg-none d-flex justify-content-end align-items-center">
						<button type="button" className="Grip-lines-button" onClick={toggleNavigation}>
							<GripLines />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
