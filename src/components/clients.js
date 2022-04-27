import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import H0 from '@/components/h0';
import SectionHeader from '@/components/section-header';

function Clients() {
	const {
		allWpClient: { nodes: clients },
	} = useStaticQuery(graphql`
		{
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
		}
	`);

	return (
		<div className="Section">
			<SectionHeader />

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
									className={`col-7 col-md-4${index % 3 !== 0 ? ' offset-md-1' : ''}`}
									key={id}
								>
									<div className="Client" data-scroll>
										<div className="Client__image">
											{image && image.localFile && (
												<GatsbyImage
													image={
														image.localFile.childImageSharp
															.gatsbyImageData
													}
													style={{
														width: '100%',
														maxWidth: '100%',
														height: '100%',
													}}
													imgStyle={{
														objectFit: 'contain',
														objectPosition: 'left center',
													}}
													alt={title}
												/>
											)}
										</div>

										<a href={link} target="_blank" rel="noopener noreferrer">
											{title}
										</a>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Clients;
