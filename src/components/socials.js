import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

const Socials = ({ abbr }) => {
	const {
		wp: {
			generalSettings: { youtube, linkedin, instagram, facebook },
		},
	} = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					youtube
					linkedin
					instagram
					facebook
				}
			}
		}
	`);

	return (
		<div className="Socials">
			<ul className="Socials__items">
				{instagram && (
					<li className="Socials__item js-item">
						<a target="_blank" href={instagram} rel="noreferrer noopener">
							{abbr ? 'Ins.' : 'Instagram'}
						</a>
					</li>
				)}
				{facebook && (
					<li className="Socials__item js-item">
						<a target="_blank" href={facebook} rel="noreferrer noopener">
							{abbr ? 'Fb.' : 'Facebook'}
						</a>
					</li>
				)}
				{linkedin && (
					<li className="Socials__item js-item">
						<a target="_blank" href={linkedin} rel="noreferrer noopener">
							{abbr ? 'Li.' : 'LinkedIn'}
						</a>
					</li>
				)}
				{youtube && (
					<li className="Socials__item js-item">
						<a target="_blank" href={youtube} rel="noreferrer noopener">
							{abbr ? 'Yt.' : 'YouTube'}
						</a>
					</li>
				)}
			</ul>
		</div>
	);
};

Socials.defaultProps = {
	abbr: true,
};

Socials.propTypes = {
	abbr: PropTypes.bool,
};

export default Socials;
