import React from 'react';
import Link from 'gatsby-plugin-transition-link';
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
		<Link className="Project-card" to={project.uri}>
			{children}
		</Link>
	) : (
		<div className="Project-card">{children}</div>
	);
};

export default ProjectCard;
