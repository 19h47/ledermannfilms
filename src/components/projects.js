import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ProjectCard from '@/components/project-card';

const gridClassNames = [
	'col-14 col-md-9 offset-md-5',
	'col-14 col-md-4',
	'col-14 col-md-4 offset-md-3',
	'col-14 col-md-9',
	'col-14 col-md-4 offset-md-2',
	'col-14 col-md-4 offset-md-4',
	'col-14 col-md-9 offset-md-5',
];

function Projects() {
	const {
		allWpProject: { nodes: projects },
	} = useStaticQuery(graphql`
		{
			allWpProject {
				nodes {
					id
					title
					uri
					terms {
						nodes {
							... on WpProjectCategory {
								id
								name
							}
						}
					}
					featuredImage {
						node {
							localFile {
								...HeroImage
							}
						}
					}
					customFields {
						gallery {
							localFile {
								...HeroImage
							}
						}
					}
				}
			}
		}
	`);

	return (
		<ul className="Projects__items row">
			{projects.map((project, index) => {
				return (
					<li className={`Projects__item ${gridClassNames[index % 6]}`} key={index}>
						<ProjectCard project={project} index={index} />
					</li>
				);
			})}
		</ul>
	);
}

export default Projects;
