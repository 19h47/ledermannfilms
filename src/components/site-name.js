import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
		<Link className="Site-name smallcaps d-inline-block" to="/" data-scroll>
			<span className="Site-name__line">
				<span style={{ transitionDelay: `${delay}s` }}>
					<i>✦</i>
					{wp.generalSettings.title}
				</span>
			</span>
		</Link>
	);
};

export default SiteName;
