import React from 'react';
import Link from 'gatsby-plugin-transition-link';
import Img from 'gatsby-image';

const ProjectCard = ({ project, index }) => {
	const children = (
		<>
			<div className="Card-project__thumbnail">
				<Img fluid={project.featuredImage.node.localFile.childImageSharp.fluid} />
			</div>

			<header className="Card-project__header">
				<p>{project.title}</p>
				{project.terms && <p>{project.terms.nodes.map(term => term.name)}</p>}
				<p>({index + 1})</p>
			</header>
		</>
	);

	return project.customFields.gallery ? (
		<Link className="Card-project" to={project.link}>
			{children}
		</Link>
	) : (
		<div className="Card-project">{children}</div>
	);
};

export default ProjectCard;
