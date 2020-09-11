import React from 'react';

import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import H0 from '@/components/h0';
import Projects from '@/components/projects';
import Seo from '@/components/seo';
import Footer from '@/components/footer';
import ProjectCategories from '@/components/project-categories';

export const query = graphql`
	query workPage($id: String!) {
		page: wpPage(id: { eq: $id }) {
			title
		}
	}
`;

export default ({ data }) => {
	const {
		page: { title },
	} = data;

	return (
		<Layout className="Work-page">
			<Seo title={title} />

			<div className="Site-container">
				<div className="row">
					<div className="col-14">
						<H0 texts={['All', 'Projects']} />
					</div>
					<div className="col-14">
						<ProjectCategories />
					</div>
				</div>
			</div>

			<div className="Section Section--projects">
				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<Projects />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</Layout>
	);
};
