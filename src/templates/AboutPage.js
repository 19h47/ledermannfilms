import React, { useRef, useLayoutEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import gsap from 'gsap';

import SplitText from '../vendors/SplitText';

import Layout from '@/components/layout';
import Location from '@/components/location';
import Seo from '@/components/seo';
import Services from '@/components/services';
import Clients from '@/components/clients';
import Footer from '@/components/footer';

gsap.registerPlugin(SplitText);

export const query = graphql`
	query aboutPage($id: String!) {
		page: wpPage(id: { eq: $id }) {
			title
			content
			customFields {
				hero {
					content
				}
			}
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

export default ({ data }) => {
	const contentRef = useRef(null);

	const {
		page: {
			title,
			featuredImage: { node: featuredImage },
			customFields: {
				hero: { content },
			},
		},
	} = data;

	useLayoutEffect(() => {
		if (contentRef.current) {
			new SplitText(contentRef.current, { type: 'lines', linesClass: 'lineChild' });
			new SplitText(contentRef.current, { type: 'lines', linesClass: 'lineParent' });

			return;
		}
	}, [contentRef]);

	return (
		<Layout>
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container h-100">
					<div className="Hero__body h-100" style={{ overflow: 'visible' }}>
						<footer className="Hero__footer h-100">
							<div className="row d-flex align-items-end h-100 ">
								<div className="col-14 col-md-4 order-1 order-md-0">
									<h3
										className="Hero__footer__content"
										data-scroll
										ref={contentRef}
										style={{ transitionDelay: '1.9s' }}
										dangerouslySetInnerHTML={{ __html: content }}
									/>
								</div>

								<div className="col-8 col-md-5 offset-md-1 h-100">
									<div data-scroll>
										<Img
											imgStyle={{
												objectFit: 'contain',
											}}
											fadeIn={true}
											backgroundColor={'#121212'}
											durationFadeIn={1600}
											fluid={featuredImage.localFile.childImageSharp.fluid}
											style={{ maxWidth: '100%', maxHeight: '100%' }}
										/>
									</div>
								</div>
								<div className="col-6 offset-md-2 col-md-2">
									<Location />
								</div>
								<div className="col-14 order-3 d-md-none">
									<hr />
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>

			<Services />
			<Clients />
			<Footer />
		</Layout>
	);
};
