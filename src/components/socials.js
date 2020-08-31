import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Socials = () => {
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
					<li className="Socials__item">
						<a target="_blank" href={instagram} rel="noreferrer noopener">
							Ins.
						</a>
					</li>
				)}
				{facebook && (
					<li className="Socials__item">
						<a target="_blank" href={facebook} rel="noreferrer noopener">
							Fb.
						</a>
					</li>
				)}
				{linkedin && (
					<li className="Socials__item">
						<a target="_blank" href={linkedin} rel="noreferrer noopener">
							Li.
						</a>
					</li>
				)}
				{youtube && (
					<li className="Socials__item">
						<a target="_blank" href={youtube} rel="noreferrer noopener">
							Yt.
						</a>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Socials;
