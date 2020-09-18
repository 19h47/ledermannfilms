import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import H0 from '@/components/h0';
import Footer from '@/components/footer';
import Seo from '@/components/seo';
import ProjectCategories from '@/components/project-categories';
import Projects from '@/components/projects';

export const query = graphql`
	query projectCategory($id: String!) {
		projectCategory: wpProjectCategory(id: { eq: $id }) {
			uri
			id
			name
			projects {
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
						hero {
							title
							video {
								title
								guid
								mimeType
							}
						}
						gallery {
							localFile {
								...HeroImage
							}
						}
					}
				}
			}
		}
	}
`;

export default ({ data }) => {
	const {
		projectCategory: {
			name,
			projects: { nodes: projects },
		},
	} = data;

	return (
		<Layout>
			<Seo title={name} />
			<div>
				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<H0 texts={[name]} />
						</div>
						<div className="col-14">
							<ProjectCategories />
						</div>
					</div>
				</div>
			</div>
			<div className="Section Section--projects">
				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<Projects projects={projects} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};
