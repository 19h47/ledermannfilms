import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import Video from '@/components/video';

const ProjectCard = ({ project, index }) => {
	const {
		projectCategories,
		title,
		customFields: {
			hero: { thumbnail },
		},
		featuredImage,
	} = project;
	const { scroll } = useLocomotiveScroll();

	console.log(featuredImage);

	const children = (
		<>
			<div
				className={`Project-card__body${thumbnail ? ' Project-card__body--has-video' : ''
					}`}>
				{featuredImage && featuredImage.node && featuredImage.node.localFile && (
					<div className="Project-card__thumbnail" data-scroll>
						<img
							src={featuredImage.node.localFile.childImageSharp.fluid.srcWebp}
							srcSet={featuredImage.node.localFile.childImageSharp.fluid.srcSetWebp}
							sizes={featuredImage.node.localFile.childImageSharp.fluid.sizes}
							loading="lazy"
							alt={title}
							width={
								featuredImage.node.localFile.childImageSharp.gatsbyImageData.width
							}
							height={
								featuredImage.node.localFile.childImageSharp.gatsbyImageData.height
							}
						/>
						{thumbnail && (
							<Video
								className="Project-card__video"
								src={thumbnail}
								type="video/mp4"
							/>
						)}
					</div>
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
			data-scroll
			trigger={() => {
				setTimeout(() => {
					scroll.scrollTo(0, {
						duration: 0,
						disableLerp: true,
					});
					scroll.update();
				}, 700);
			}}>
			{children}
		</AniLink>
	) : (
		<div className="Project-card">{children}</div>
	);
};

export default ProjectCard;
