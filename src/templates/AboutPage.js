import React, { useRef } from 'react';
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
	const contentRef = useRef(null);

	const {
		page: {
			title,
			content,
			featuredImage: { node: featuredImage },
		},
	} = data;

	return (
		<Layout>
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container h-100">
					<div className="Hero__body h-100" style={{ overflow: 'visible' }}>
						<footer className="Hero__footer" style={{ height: '100%' }}>
							<div className="row d-flex align-items-end" style={{ height: '100%' }}>
								<div className="col-14 col-md-4" data-scroll>
									<div
										ref={contentRef}
										className="Wysiwyg"
										style={{ transitionDelay: '0.6s' }}
										dangerouslySetInnerHTML={{ __html: content }}
									/>
								</div>

								<div className="col-7 offset-md-1" style={{ height: '100%' }}>
									<Img
										imgStyle={{
											objectFit: 'contain',
										}}
										fadeIn={true}
										backgroundColor={'#121212'}
										durationFadeIn={1000}
										fluid={featuredImage.remoteFile.childImageSharp.fluid}
										style={{ transform: `translate3d(0,${6.6666}vw,0)` }}
									/>
								</div>
								<div className="col-7 col-md-2">
									<div className="Hero__location" data-scroll>
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
			</div>

			<Clients />
			<Services />
			<Footer />
		</Layout>
	);
};
