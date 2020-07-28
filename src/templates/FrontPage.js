import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import Seo from '@/components/seo';

export const query = graphql`
	query frontPage($id: String!) {
		page: wpPage(id: { eq: $id }) {
			title
			content
			customFields {
				test
			}
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
			<Seo title={data.title} />
			<h1>{page.title}</h1>
		</Layout>
	);
};
