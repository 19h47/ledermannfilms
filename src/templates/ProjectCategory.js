import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import H0 from '@/components/h0';
import Footer from '@/components/footer';

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
		projectCategory: { name },
	} = data;

	return (
		<Layout>
			<div className="Section Section--projects">
				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<H0 texts={[name]} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};
