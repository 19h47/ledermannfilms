import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Content from '@/components/content';
import H0 from '@/components/h0';
import Layout from '@/components/layout';
import SectionHeader from '@/components/section-header';
import Seo from '@/components/seo';
import Socials from '@/components/socials';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import Video from '@/components/video';

import Play from '@/assets/svg/play.inline.svg';
import Flag from '@/assets/svg/flag.inline.svg';

export const query = graphql`
	query frontPage($id: String!) {
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
			customFields {
				hero {
					title
					video {
						title
						guid
						mimeType
					}
				}
				content {
					text {
						en
					}
				}
			}
		}
	}
`;

export default ({ data }) => {
	const { page } = data;
	const {
		title,
		customFields: { hero, content },
		featuredImage: { node: thumbnail },
	} = page;

	const heroThumbnail = (
		<div className="Hero__thumbnail" data-scroll>
			<Img
				fadeIn={true}
				backgroundColor={'black'}
				durationFadeIn={1000}
				fluid={thumbnail.localFile.childImageSharp.fluid}
			/>
		</div>
	);

	const heroVideo = (
		<Video className="Hero__video" src={hero.video.guid} type={hero.video.mimeType} />
	);

	return (
		<Layout className="Front-page">
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container h-100">
					<div className="Hero__body h-100">
						<div className="Hero__content">
							<div className="row">
								<div className="col-14 col-md-12 offset-md-1">
									<H0 texts={hero.title} />
								</div>
							</div>
						</div>
						<footer className="Hero__footer">
							<div className="row d-flex align-items-end align-items-md-center">
								<div className="col-14 col-md-6 offset-md-1 order-4 order-md-0">
									<button
										className="Button"
										type="button"
										data-scroll
										style={{ transitionDelay: '0.6s, 0s' }}>
										<span>
											Watch the showreel
											<Play />
										</span>
									</button>
								</div>
								<div
									className="col-7 col-md-2 order-0 order-md-1"
									style={{ height: '100%' }}>
									<div
										className="Hero__location"
										data-scroll
										style={{ transitionDelay: '0.9s' }}>
										Based in
										<br />
										Neuchâtel, CH.
										<Flag />
									</div>
								</div>
								<div
									className="col-7 offset-md-3 col-md-2 order-1 order-md-2 d-flex d-md-block justify-content-end"
									data-scroll>
									<Socials />
								</div>
								<div className="col-14 order-3 d-md-none">
									<hr />
								</div>
							</div>
						</footer>

						{hero.video.guid ? heroVideo : heroThumbnail}
					</div>
				</div>
			</div>

			<Content text={content.text.en} />

			<div className="Section Section--projects">
				<SectionHeader />

				<div>
					<div className="Site-container">
						<div className="row">
							<div className="col-14">
								<H0 texts={['Featured', 'Works']} />
							</div>
						</div>
						<Projects />
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};
