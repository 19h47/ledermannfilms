import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import ProjectHero from '@/components/project-hero';

import Label from '@/assets/svg/label.inline.svg';

const TRANSITION_LENGTH = 1.5;

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

const ProjectInner = ({ mount, data }) => {
	const { nextProject, project } = data;
	const {
		title,
		customFields: { gallery },
	} = project;

	const exitTransition = {
		length: TRANSITION_LENGTH,
		trigger: () => {
			if (document) {
				document.body.style.overflow = 'hidden';
			}
		},
	};

	const entryTransition = {
		delay: TRANSITION_LENGTH,
		trigger: () => {
			if (document && window) {
				window.scrollTo(0, 0);
				document.body.style.overflow = 'visible';
			}
		},
	};

	return (
		<Layout className="Project">
			<Seo title={title} />

			<ProjectHero project={project} footer show={mount} />

			{gallery && gallery.length !== 0 && (
				<div className={`Section${mount ? ' is-visible' : ' is-hidden'}`}>
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
									<div className="Section__header__diamond text-align-right">
										⦿
									</div>
								</div>
							</div>
						</div>
					</header>
					<div className="Site-container">
						<ul className="Project__items row">
							{gallery.map(image => (
								<li
									className={`Project__item ${layout(image.customFields.layout)}`}
									key={image.id}
									data-scroll>
									<Img fadeIn fluid={image.localFile.childImageSharp.fluid} />
								</li>
							))}
						</ul>
					</div>
				</div>
			)}

			<TransitionLink exit={exitTransition} entry={entryTransition} to={nextProject.uri}>
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
									<h2>NExt project</h2>
								</div>
								<div className="col-4">
									<div className="Section__header__diamond text-align-right">
										⦿
									</div>
								</div>
							</div>
						</div>
					</header>
				</div>
				<ProjectHero truncated project={nextProject} />
			</TransitionLink>
		</Layout>
	);
};

const Project = ({ data }) => {
	return (
		<TransitionState>
			{({ mount }) => <ProjectInner mount={mount} data={data} />}
		</TransitionState>
	);
};

export default Project;
