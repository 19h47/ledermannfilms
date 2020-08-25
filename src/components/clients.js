import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import H0 from "@/components/h0";

import Label from "@/assets/svg/label.inline.svg";

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
							<div className="Section__header__diamond text-align-right">⦿</div>
						</div>
					</div>
				</div>
			</header>

			<div className="Site-container">
				<div className="row">
					<div className="col-14">
						<H0 texts={["Clients"]} />
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
								<li className={`col-4${index % 3 !== 0 ? " offset-1" : ""}`} key={id}>
									<div className="Client">
										<div className="Client__image">
											<Img
												fluid={image.localFile.childImageSharp.fluid}
												imgStyle={{
													objectFit: "contain",
													objectPosition: "left center",
												}}
											/>
										</div>

										<a href={link} target="_blank" rel="noopener noreferrer">
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
	);
}

export default Clients;
