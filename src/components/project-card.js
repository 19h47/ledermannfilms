import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import Video from '@/components/video';

const ProjectCard = ({ project, index }) => {
	const {
		terms,
		title,
		customFields: {
			hero: { video },
		},
	} = project;

	console.log(video);

	const children = (
		<>
			<div className={`Project-card__body${video ? ' Project-card__body--has-video' : ''}`}>
				<div className="Project-card__thumbnail" data-scroll>
					<Img
						fadeIn={true}
						backgroundColor={'black'}
						durationFadeIn={1000}
						fluid={project.featuredImage.node.localFile.childImageSharp.fluid}
					/>
				</div>
				{video && (
					<Video className="Project-card__video" src={video.guid} type={video.mimeType} />
				)}
			</div>

			<header className="Project-card__header" data-scroll>
				<p>{title}</p>
				{terms && <p>{terms.nodes.map(term => term.name)}</p>}
				<p>({index + 1})</p>
			</header>
		</>
	);

	return project.customFields.gallery && 0 !== project.customFields.gallery.length ? (
		<AniLink
			className="Project-card"
			to={project.uri}
			cover
			direction="up"
			bg="#000000"
			data-scroll>
			{children}
		</AniLink>
	) : (
		<div className="Project-card">{children}</div>
	);
};

export default ProjectCard;
