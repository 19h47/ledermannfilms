import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

const ProjectCard = ({ project, index }) => {
	const children = (
		<>
			<div className="Project-card__thumbnail">
				<Img fadeIn fluid={project.featuredImage.node.localFile.childImageSharp.fluid} />
			</div>

			<header className="Project-card__header">
				<p>{project.title}</p>
				{project.terms && <p>{project.terms.nodes.map(term => term.name)}</p>}
				<p>({index + 1})</p>
			</header>
		</>
	);

	return project.customFields.gallery ? (
		<AniLink className="Project-card" to={project.uri} cover direction="up" bg="#121212">
			{children}
		</AniLink>
	) : (
		<div className="Project-card">{children}</div>
	);
};

export default ProjectCard;
