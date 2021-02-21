import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
// import Img from 'gatsby-image';

import Video from '@/components/video';

const ProjectCard = ({ project, index }) => {
	const {
		projectCategories,
		title,
		customFields: {
			hero: { thumbnail },
		},
	} = project;

	const children = (
		<>
			<div
				className={`Project-card__body${thumbnail ? ' Project-card__body--has-video' : ''
					}`}>
				{project.featuredImage && (
					<div className="Project-card__thumbnail" data-scroll>
						<img
							src={project.featuredImage.node.localFile.childImageSharp.fluid.srcWebp}
							srcSet={project.featuredImage.node.localFile.childImageSharp.fluid.srcSetWebp}
							sizes={project.featuredImage.node.localFile.childImageSharp.fluid.sizes}
							loading="lazy"
							alt={title}
						/>
					</div>
				)}
				{thumbnail && (
					<Video className="Project-card__video" src={thumbnail} type="video/mp4" />
				)}
			</div>

			<header className="Project-card__header" data-scroll>
				<p>{title}</p>
				{projectCategories && <p>{projectCategories.nodes.map(term => term.name)}</p>}
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
