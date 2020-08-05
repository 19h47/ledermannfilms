import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Socials = () => {
	const {
		wp: { generalSettings: items },
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
			{items && (
				<ul className="Socials__items">
					{items.instagram && (
						<li className="Socials__item">
							<a target="_blank" href={items.instagram} rel="noreferrer noopener">
								Ins.
							</a>
						</li>
					)}
					{items.facebook && (
						<li className="Socials__item">
							<a target="_blank" href={items.facebook} rel="noreferrer noopener">
								Fb.
							</a>
						</li>
					)}
					{items.linkedin && (
						<li className="Socials__item">
							<a target="_blank" href={items.linkedin} rel="noreferrer noopener">
								Li.
							</a>
						</li>
					)}
					{items.youtube && (
						<li className="Socials__item">
							<a target="_blank" href={items.youtube} rel="noreferrer noopener">
								Yt.
							</a>
						</li>
					)}
				</ul>
			)}
		</div>
	);
};

export default Socials;
