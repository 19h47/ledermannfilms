import React from 'react';

import { graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link';

import Layout from '@/components/layout';
import H0 from '@/components/h0';
import Projects from '@/components/projects';
import Seo from '@/components/seo';

export const query = graphql`
	query workPage($id: String!) {
		page: wpPage(id: { eq: $id }) {
			title
		}
		projects: allWpProjectCategory {
			nodes {
				id
				name
				link
				count
			}
		}
		totalCount: allWpProject {
			totalCount
		}
	}
`;

const listItem = ({ id, link, name, count }) => (
	<li className="Project-categories__item" key={id}>
		<Link to={link}>
			{name}
			<span>{count}</span>
		</Link>
	</li>
);

export default ({ data }) => {
	const {
		projects: { nodes: projectCategories },
		page: { title },
		totalCount: { totalCount },
	} = data;

	return (
		<Layout className="Work-page">
			<Seo title={title} />
			<div>
				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<H0 texts={['All', 'Projects']} />
						</div>
						<div className="col-14">
							<div className="Project-categories">
								<ul className="Project-categories__items">
									<li className="Project-categories__item">
										<Link to="/work">
											All<span>{totalCount}</span>
										</Link>
									</li>
									{projectCategories.map(category => listItem(category))}
								</ul>
							</div>
						</div>
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
		</Layout>
	);
};
