import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import H0 from '@/components/h0';

import SectionHeader from '@/components/section-header';

function Services() {
	const {
		allWpService: { nodes: services },
	} = useStaticQuery(graphql`
		{
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
	`);

	return (
		<div className="Section">
			<SectionHeader />

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
									className={`col-14 col-md-4${
										index % 3 !== 0 ? ' offset-md-1' : ''
									}`}
									key={service.id}>
									<div className="Service" data-scroll>
										<div className="Service__icon">
											<Icon />
										</div>
										<h3 className="Service__title">{service.title}</h3>
										<p>{content}</p>
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

export default Services;
