import React from 'react';

import { graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link';

import Layout from '@/components/layout';
import H0 from '@/components/h0';

export const query = graphql`
	query projectCategories {
		allWpProjectCategory {
			nodes {
				id
				name
				uri
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
	} = data;

	console.log(projectCategories);

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
			</div>
		</Layout>
	);
};
