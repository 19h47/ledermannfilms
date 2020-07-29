import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '@/components/layout';
import Seo from '@/components/seo';

import Play from '@/assets/svg/play.inline.svg';
import Flag from '@/assets/svg/flag.inline.svg';

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
		wp {
			id
			generalSettings {
				youtube
				linkedin
				instagram
				facebook
			}
		}
	}
`;

export default ({ data }) => {
	const {
		page,
		wp: { generalSettings: socials },
	} = data;
	const {
		title,
		customFields: { hero },
	} = page;
	console.log(socials);

	return (
		<Layout>
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container">
					<div className="Hero__body">
						<div className="Hero__content">
							<div className="row">
								<div className="col-14 col-md-12 offset-md-1">
									<h1
										className="Hero__title"
										dangerouslySetInnerHTML={{ __html: hero.title }}
									/>
								</div>
							</div>
						</div>
						<footer className="Hero__footer">
							<div className="row d-flex align-items-end align-items-md-center">
								<div className="col-14 col-md-6 offset-md-1 order-4 order-md-0">
									<button className="Button" type="button">
										watch the showreel
										<Play />
									</button>
								</div>
								<div className="col-7 col-md-2 order-0 order-md-1">
									<div className="Hero__location">
										<Flag />
										Based in
										<br />
										Neuchâtel, CH.
									</div>
								</div>
								<div className="col-7 offset-md-3 col-md-2 order-1 order-md-2 d-flex d-md-block justify-content-end">
									<div className="Socials">
										{socials && (
											<ul className="Socials__items">
												{socials.instagram && (
													<li className="Socials__item">
														<a
															href={socials.instagram}
															rel="noopener noreferer">
															Ins.
														</a>
													</li>
												)}
												{socials.facebook && (
													<li className="Socials__item">
														<a
															href={socials.facebook}
															rel="noopener noreferer">
															Fb.
														</a>
													</li>
												)}
												{socials.linkedin && (
													<li className="Socials__item">
														<a
															href={socials.linkedin}
															rel="noopener noreferer">
															Li.
														</a>
													</li>
												)}
												{socials.youtube && (
													<li className="Socials__item">
														<a
															href={socials.youtube}
															rel="noopener noreferer">
															Yt.
														</a>
													</li>
												)}
											</ul>
										)}
									</div>
								</div>
								<div className="col-14 order-3 d-md-none">
									<hr />
								</div>
							</div>
						</footer>

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
