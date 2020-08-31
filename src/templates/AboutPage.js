import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Services from '@/components/services';
import Clients from '@/components/clients';
import Footer from '@/components/footer';

import Flag from '@/assets/svg/flag.inline.svg';

export const query = graphql`
	query aboutPage($id: String!) {
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
	const {
		page: {
			title,
			content,
			featuredImage: { node: featuredImage },
		},
	} = data;

	console.log(featuredImage);

	return (
		<Layout>
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container">
					<footer className="Hero__footer">
						<div className="row d-flex align-items-end">
							<div className="col-14 col-md-4">
								<div
									className="Wysiwyg"
									dangerouslySetInnerHTML={{ __html: content }}
								/>
							</div>

							<div className="col-7 offset-md-1">
								<Img fluid={featuredImage.remoteFile.childImageSharp.fluid} />
							</div>
							<div className="col-7 col-md-2">
								<div className="Hero__location">
									<Flag />
									Based in
									<br />
									Neuchâtel, CH.
								</div>
							</div>
							<div className="col-14 order-3 d-md-none">
								<hr />
							</div>
						</div>
					</footer>
				</div>
			</div>

			<Clients />
			<Services />
			<Footer />
		</Layout>
	);
};
