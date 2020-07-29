import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '@/components/layout';
import Seo from '@/components/seo';

export const query = graphql`
	query frontPage($id: String!) {
		page: wpPage(id: { eq: $id }) {
			title
			content
			customFields {
				hero {
					title
					thumbnail {
						localFile {
							...HeroImage
						}
					}
				}
			}
		}
	}
`;

export default ({ data }) => {
	console.log(data);
	const { page } = data;
	const {
		title,
		customFields: { hero },
	} = page;

	return (
		<Layout>
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container">
					<div className="Hero__body">
						<div className="Hero__content">
							<div className="row">
								<div className="col-12 offset-1">
									<h1
										className="Hero__title"
										dangerouslySetInnerHTML={{ __html: hero.title }}
									/>
								</div>
							</div>
						</div>

						<div className="Hero__thumbnail">
							<Img fluid={hero.thumbnail.localFile.childImageSharp.fluid} />
						</div>
					</div>
				</div>
			</div>
			<h1>{page.title}</h1>
		</Layout>
	);
};
