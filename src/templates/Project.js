import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';

export const query = graphql`
	query project($id: String!) {
		page: wpProject(id: { eq: $id }) {
			title
		}
	}
`;

export default ({ data }) => {
	const { page } = data;

	return (
		<Layout>
			<h1>{page.title}</h1>
		</Layout>
	);
};
