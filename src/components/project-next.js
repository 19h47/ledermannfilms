import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import H0 from '@/components/h0';

const ProjectHero = ({ project }) => {
	const {
		title,
		customFields: { hero },
		featuredImage,
	} = project;

	const image = getImage(featuredImage.node.localFile);

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
						{image && (
							<GatsbyImage backgroundColor={'black'} alt={title} image={image} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectHero;
