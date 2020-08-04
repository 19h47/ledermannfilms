import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SiteDescription = ({ delay }) => {
	const { wp } = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					description
				}
			}
		}
	`);

	return (
		<div className="Site-description smallcaps" data-scroll>
			<span className="Site-description__line">
				<span style={{ transitionDelay: `${delay}s` }}>
					{wp.generalSettings.description}
				</span>
			</span>
		</div>
	);
};

export default SiteDescription;
