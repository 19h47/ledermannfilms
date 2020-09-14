import React from 'react';

import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import H0 from '@/components/h0';

import Play from '@/assets/svg/play.inline.svg';
import Th from '@/assets/svg/th.inline.svg';

const ProjectHero = ({ project, footer = false, show = true, truncated = false }) => {
	const {
		title,
		customFields: { hero },
		featuredImage: { node: thumbnail },
	} = project;

	return (
		<div
			className={`Hero${show ? ' is-visible' : ' is-hidden'}${
				truncated ? ' is-truncated' : ''
			}`}>
			<div className="Site-container h-100">
				<div className="Hero__body h-100">
					<div className="Hero__content">
						<div className="row">
							<div className="col-14 col-md-12 offset-md-1">
								<H0 texts={hero.title ? hero.title : title} />
							</div>
						</div>
					</div>

					{footer && (
						<footer className="Hero__footer">
							<div className="row d-flex align-items-end align-items-md-center">
								<div className="col-14 col-md-6 offset-md-1 order-4 order-md-0">
									<button
										className="Button"
										type="button"
										data-scroll
										style={{ transitionDelay: '0.6s, 0s' }}>
										<span>
											Watch the showreel
											<Play />
										</span>
									</button>
								</div>
								<div className="col-7 col-md-2 order-0 order-md-1"></div>
								<div className="col-7 offset-md-3 col-md-2 order-1 order-md-2 d-flex d-md-block justify-content-end">
									<AniLink
										className="All-projects smallcaps"
										to="/work/"
										cover
										direction="up"
										bg="#000000">
										<span>all projects</span>
										<Th />
									</AniLink>
								</div>
								<div className="col-14 order-3 d-md-none">
									<hr />
								</div>
							</div>
						</footer>
					)}

					<div className="Hero__thumbnail">
						<Img fadeIn fluid={thumbnail.localFile.childImageSharp.fluid} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectHero;
