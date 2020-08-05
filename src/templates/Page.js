import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';

export const query = graphql`
	query page($id: String!) {
		page: wpPage(id: { eq: $id }) {
			title
			content
			featuredImage {
				node {
					remoteFile {
						...HeroImage
					}
				}
			}
		}
	}
`;

export default ({ data }) => {
	const { page } = data;
	return (
		<Layout location="page">
			<h1>{page.title}</h1>
		</Layout>
	);
};
