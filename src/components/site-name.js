import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const SiteName = ({ delay }) => {
	const { wp } = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					title
				}
			}
		}
	`);

	return (
		<AniLink
			className="Site-name smallcaps d-inline-block margin-left-2"
			to="/"
			data-scroll
			cover
			direction="up"
			bg="#000000">
			<span className="Site-name__line">
				<span style={{ transitionDelay: `${delay}s` }}>
					<i>✦</i>
					{wp.generalSettings.title}
				</span>
			</span>
		</AniLink>
	);
};

export default SiteName;
