import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import H0 from '@/components/h0';

import Label from '@/assets/svg/label.inline.svg';
import Play from '@/assets/svg/play.inline.svg';
import Th from '@/assets/svg/th.inline.svg';

export const query = graphql`
	query project($id: String!) {
		page: wpProject(id: { eq: $id }) {
			title
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
				}
				gallery {
					id
					localFile {
						...HeroImage
					}
					customFields {
						layout
					}
				}
			}
		}
	}
`;

const layout = layout => {
	if ('center' === layout) {
		return 'col-14';
	}

	if ('right' === layout) {
		return 'col-9';
	}

	return 'col-9 offset-md-5';
};

export default ({ data }) => {
	const {
		page: {
			title,
			customFields: { hero, gallery },
			featuredImage: { node: thumbnail },
		},
	} = data;

	console.log(data);

	return (
		<Layout className="Project">
			<Seo title={title} />
			<div className="Hero">
				<div className="Site-container">
					<div className="Hero__body">
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
									<button className="Button" type="button">
										watch the video
										<Play />
									</button>
								</div>
								<div className="col-7 col-md-2 order-0 order-md-1"></div>
								<div className="col-7 offset-md-3 col-md-2 order-1 order-md-2 d-flex d-md-block justify-content-end">
									<AniLink
										className="All-projects smallcaps"
										to="/work/"
										cover
										direction="up"
										bg="#121212">
										<span>all projects</span>
										<Th />
									</AniLink>
								</div>
								<div className="col-14 order-3 d-md-none">
									<hr />
								</div>
							</div>
						</footer>

						<div className="Hero__thumbnail">
							<Img fadeIn fluid={thumbnail.localFile.childImageSharp.fluid} />
						</div>
					</div>
				</div>
			</div>

			<div className="Section">
				<header className="Section__header">
					<div className="Site-container">
						<div className="row">
							<div className="col-14">
								<hr />
							</div>
						</div>
						<div className="row">
							<div className="col-5 d-none d-md-block">
								<div className="Label">
									<Label />
								</div>
							</div>
							<div className="col-5">
								<h2>Still frames</h2>
							</div>
							<div className="col-4">
								<div className="Section__header__diamond text-align-right">⦿</div>
							</div>
						</div>
					</div>
				</header>
				<div className="Site-container">
					<ul className="Project__items row">
						{gallery.map(image => {
							console.log(image);
							return (
								<li
									className={`Project__item ${layout(image.customFields.layout)}`}
									key={image.id}>
									<Img fadeIn fluid={image.localFile.childImageSharp.fluid} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Layout>
	);
};
