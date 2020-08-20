import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '@/components/layout';
import H0 from '@/components/h0';
import Seo from '@/components/seo';

import Label from '@/assets/svg/label.inline.svg';
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
		allWpClient {
			nodes {
				id
				title
				nodeType
				customFields {
					link
					image {
						localFile {
							...HeroImage
						}
					}
				}
			}
		}
		allWpService {
			nodes {
				id
				title
				customFields {
					content
					icon
				}
			}
		}
	}
`;

export default ({ data }) => {
	const {
		page: { title, content },
		allWpClient: { nodes: clients },
		allWpService: { nodes: services },
	} = data;

	console.log(clients);
	return (
		<Layout>
			<Seo title={title} />

			<div className="Hero">
				<div className="Site-container">
					<div className="row">
						<div className="col-14 col-md-4">
							<div dangerouslySetInnerHTML={{ __html: content }} />
						</div>
					</div>
				</div>

				<footer className="Hero__footer">
					<div className="row d-flex align-items-end align-items-md-center">
						<div className="col-14 col-md-6 offset-md-1 order-4 order-md-0"></div>
						<div className="col-7 col-md-2 order-0 order-md-1">
							<div className="Hero__location">
								<Flag />
								Based in
								<br />
								Neuchâtel, CH.
							</div>
						</div>
						<div className="col-7 offset-md-3 col-md-2 order-1 order-md-2 d-flex d-md-block justify-content-end"></div>
						<div className="col-14 order-3 d-md-none">
							<hr />
						</div>
					</div>
				</footer>
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

				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<H0 texts={['Clients']} />
						</div>
					</div>
				</div>

				<div className="Section__inner">
					<div className="Site-container">
						<ul className="row list-style-type-none">
							{clients.map((client, index) => {
								const {
									title,
									id,
									customFields: { image, link },
								} = client;

								return (
									<li
										className={`col-4${index % 3 !== 0 ? ' offset-1' : ''}`}
										key={id}>
										<div className="Client">
											<div className="Client__image">
												<Img
													fluid={image.localFile.childImageSharp.fluid}
													imgStyle={{
														objectFit: 'contain',
														objectPosition: 'left center',
													}}
												/>
											</div>

											<a
												href={link}
												target="_blank"
												rel="noopener noreferrer">
												{title}&nbsp;↗
											</a>
										</div>
									</li>
								);
							})}
						</ul>
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

				<div className="Site-container">
					<div className="row">
						<div className="col-14">
							<H0 texts={['Services']} />
						</div>
					</div>
				</div>

				<div className="Section__inner">
					<div className="Site-container">
						<ul className="row list-style-type-none">
							{services.map((service, index) => {
								const { icon, content } = service.customFields;
								const Icon = require(`@/assets/svg/${icon}.inline.svg`).default;

								return (
									<li
										className={`col-4${index % 3 !== 0 ? ' offset-1' : ''}`}
										key={service.id}>
										<div className="Service">
											<div className="Service__icon">
												<Icon />
											</div>
											<h3 className="Service__title h2 font-style-normal">
												{service.title}
											</h3>
											<p>{content}</p>
										</div>
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
