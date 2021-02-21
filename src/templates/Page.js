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
					localFile {
						...HeroImage
					}
				}
			}
		}
	}
`;

const Page = ({ data }) => {
	const { page } = data;
	return (
		<Layout>
			<div className="Section">
				<div className="Site-container h-100">
					<div className="row h-100">
						<div className="col-14 col-md-10">
							<h1>{page.title}</h1>
							<div dangerouslySetInnerHTML={{ __html: page.content }} />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</Layout>
	);
};

export default Page;
