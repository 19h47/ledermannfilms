import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Menu from '@/components/menu';

const Header = () => {
	const { wp } = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					title
					description
				}
			}
		}
	`);

	return (
		<header className="Header">
			<div className="Site-container">
				<div className="row">
					<div className="col-5">
						<Link className="smallcaps d-inline-block" to="/">
							{wp.generalSettings.title}
						</Link>
					</div>
					<div className="col-5">
						<div className="smallcaps">{wp.generalSettings.description}</div>
					</div>
					<div className="col-4">
						<Menu className="justify-content-end" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
