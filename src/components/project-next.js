import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

import H0 from '@/components/h0';

const ProjectHero = ({ project }) => {
	const {
		title,
		customFields: { hero },
		featuredImage,
	} = project;

	return (
		<div className="Project-next">
			<div className="Site-container h-100">
				<div className="Hero__body has-gradient h-100">
					<div className="Hero__content">
						<div className="row">
							<div className="col-14 col-md-12 offset-md-1">
								<H0 texts={hero.title ? hero.title : title} />
							</div>
						</div>
					</div>

					<div className="Hero__thumbnail" data-scroll>
						{featuredImage && featuredImage.node && featuredImage.node && (
							<GatsbyImage
								fadeIn={true}
								backgroundColor={'black'}
								durationFadeIn={1000}
								image={featuredImage.node.localFile.childImageSharp.gatsbyImageData}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectHero;
