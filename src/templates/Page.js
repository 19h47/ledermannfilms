import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import Footer from '@/components/footer';

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
		<Layout>
			<h1>{page.title}</h1>
			<Footer />
		</Layout>
	);
};
