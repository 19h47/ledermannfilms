import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import SectionHeader from '@/components/section-header';
import ProjectHero from '@/components/project-hero';
import ProjectText from '@/components/project-text';
import ProjectNext from '@/components/project-next';

export const query = graphql`
	query project($id: String!, $next: String) {
		nextProject: wpProject(id: { eq: $next }) {
			title
			uri
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
					video
					thumbnail
				}
				gallery {
					id
				}
			}
		}

		project: wpProject(id: { eq: $id }) {
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
					video
					thumbnail
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
				content {
					text {
						en
						fr
					}
					informations {
						title
						text
					}
				}
			}
		}
	}
`;

const layout = layout => {
	if ('center' === layout) {
		return 'col-14 col-md-14';
	}

	if ('right' === layout) {
		return 'col-14 col-md-9';
	}

	return 'col-14 col-md-9 offset-md-5';
};

const Project = ({ data }) => {
	const { nextProject, project } = data;
	const { scroll } = useLocomotiveScroll();

	const {
		title,
		customFields: {
			gallery,
			content: { text, informations },
		},
	} = project;

	const tabs = [];

	if (text.en) {
		tabs.push({ title: 'English', content: text.en, id: 'en' });
	}

	if (text.fr) {
		tabs.push({ title: 'Français', content: text.fr, id: 'fr' });
	}

	return (
		<Layout className="Project">
			<Seo title={title} />

			<ProjectHero project={project} footer />

			{tabs && tabs.length !== 0 && (
				<div className="Site-container">
					<div className="row">
						<div className="offset-md-5 col-md-9">
							<ProjectText data={tabs} />
						</div>
					</div>
				</div>
			)}

			{informations && (
				<div className="Site-container">
					<div className="row">
						<div className="offset-md-5 col-md-4">
							<div className="Informations">
								<ul className="Informations__items">
									{informations.map((information, index) => (
										<li className="Informations__item" key={index} data-scroll>
											<p style={{ transitionDelay: `${index * 0.1}s` }}>
												{information.title}
											</p>
											<p style={{ transitionDelay: `${index * 0.1}s` }}>
												{information.text}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}

			{gallery && gallery.length && (
				<div className="Section">
					<SectionHeader title="Still frames" />

					<div className="Site-container">
						<ul className="Project__items row">
							{gallery.map(image => (
								<li
									className={`Project__item ${layout(image.customFields.layout)}`}
									key={image.id}
									data-scroll>
									<Img
										fadeIn
										fluid={image.localFile.childImageSharp.fluid}
										imgStyle={{
											objectFit: 'contain',
											height: 'auto',
											width: 'auto',
											maxWidth: '100%',
											maxHeight: '100%',
											position: 'relative',
										}}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}

			{nextProject.customFields.gallery && nextProject.customFields.gallery.length && (
				<AniLink
					className="d-block"
					to={nextProject.uri}
					cover
					direction="up"
					bg="#000000"
					trigger={() => {
						setTimeout(() => {
							scroll.scrollTo(0, {
								duration: 0,
								disableLerp: true
							});
							scroll.update();
						}, 700);
					}}
					style={{ transitionDelay: '0s, 0.8s' }}>
					<div className="Section">
						<SectionHeader title="Next project" label="" />
					</div>
					<ProjectNext project={nextProject} />
				</AniLink>
			)
			}
		</Layout >
	);
};

export default Project;
