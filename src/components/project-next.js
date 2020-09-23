import React from 'react';

import Img from 'gatsby-image';

import H0 from '@/components/h0';

const ProjectHero = ({ project }) => {
	const {
		title,
		customFields: { hero },
		featuredImage: {
			node: {
				localFile: {
					childImageSharp: { fluid },
				},
			},
		},
	} = project;

	return (
		<div className="Project-next">
			<div className="Site-container h-100">
				<div className="Hero__body h-100">
					<div className="Hero__content">
						<div className="row">
							<div className="col-14 col-md-12 offset-md-1">
								<H0 texts={hero.title ? hero.title : title} />
							</div>
						</div>
					</div>

					{fluid && (
						<div className="Hero__thumbnail" data-scroll>
							<Img
								fadeIn={true}
								backgroundColor={'black'}
								durationFadeIn={1000}
								fluid={fluid}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectHero;
