import React from 'react';

import { graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link';

import Layout from '@/components/layout';
import H0 from '@/components/h0';
import ProjectCard from '@/components/project-card';

export const query = graphql`
	query projectCategories {
		allWpProjectCategory {
			nodes {
				id
				name
				uri
			}
		}
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
`;

const listItem = ({ id, uri, name }) => (
	<li key={id}>
		<Link to={uri}>{name}</Link>
	</li>
);

export default ({ data }) => {
	const {
		allWpProjectCategory: { nodes: projectCategories },
		allWpProject: { nodes: projects },
	} = data;

	console.log(projects);

	return (
		<Layout>
			<div className="Section Section--projects">
				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<H0 texts={['All', 'Projects']} />
						</div>
						<div className="col-14">
							<ul>
								<li>
									<Link to="/works">All</Link>
								</li>
								{projectCategories.map(category => listItem(category))}
							</ul>
						</div>
					</div>
				</div>

				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<ul>
								{projects.map((project, index) => (
									<li key={project.id}>
										<ProjectCard project={project} index={index} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
