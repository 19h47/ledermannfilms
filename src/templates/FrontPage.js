import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '@/components/layout';
import Seo from '@/components/seo';

import Play from '@/assets/svg/play.inline.svg';
import Flag from '@/assets/svg/flag.inline.svg';
import Label from '@/assets/svg/label.inline.svg';

const gridClassNames = [
	'col-14 col-md-9 offset-md-5',
	'col-14 col-md-4',
	'col-14 col-md-4 offset-md-3',
	'col-14 col-md-9',
	'col-14 col-md-4 offset-md-2',
	'col-14 col-md-4 offset-md-4',
	'col-14 col-md-9 offset-md-5',
];

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
				}
				content {
					text {
						en
					}
				}
			}
		}
		projects: allWpProject {
			nodes {
				title
				link
				terms {
					nodes {
						... on WpProjectCategory {
							id
							name
						}
					}
				}
				featuredImage {
					node {
						localFile {
							...HeroImage
						}
					}
				}
				customFields {
					gallery {
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
		projects: { nodes: projects },
		wp: { generalSettings: socials },
	} = data;
	const {
		title,
		customFields: { hero, content },
		featuredImage: { node: thumbnail },
	} = page;
	console.log(projects);

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
							<Img fluid={thumbnail.localFile.childImageSharp.fluid} />
						</div>
					</div>
				</div>
			</div>

			<div className="Content">
				<div className="Site-container">
					<div className="row">
						<div className="col-14 offset-md-5 col-md-9">
							<div
								className="Content__text"
								dangerouslySetInnerHTML={{ __html: content.text.en }}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="Section Section--projects">
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
									Work
								</div>
							</div>
							<div className="col-5">
								<h2>Main projects</h2>
							</div>
							<div className="col-4">
								<div className="Section__header__diamond text-align-right">◈</div>
							</div>
						</div>
					</div>
				</header>

				<div>
					<div className="Site-container">
						<div className="row">
							<div className="col-12">
								<h2 className="Section__title">
									Featured
									<br />
									Works
								</h2>
							</div>
						</div>
						<ul className="Section--projects__items row">
							{projects.map((project, index) => {
								const children = (
									<>
										<div className="Card-project__thumbnail">
											<Img
												fluid={
													project.featuredImage.node.localFile
														.childImageSharp.fluid
												}
											/>
										</div>

										<header className="Card-project__header">
											<p>{project.title}</p>
											{project.terms && (
												<p>{project.terms.nodes.map(term => term.name)}</p>
											)}
											<p>({index + 1})</p>
										</header>
									</>
								);

								return (
									<li
										className={`Section--projects__item ${
											gridClassNames[index % 6]
										}`}
										key={index}>
										{project.customFields.gallery ? (
											<Link className="Card-project" to={project.link}>
												{children}
											</Link>
										) : (
											<div className="Card-project">{children}</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
};
