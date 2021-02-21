import React, { useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from 'gatsby';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

const listItem = ({ id, uri, name, count }) => (
	<li className="Project-categories__item" key={id}>
		<AniLink cover direction="up" bg="#000000" to={uri}>
			{name}
			<span>{count}</span>
		</AniLink>
	</li>
);

const ProjectCategories = () => {
	const {
		allWpProjectCategory: { nodes: projectCategories },
		totalCount: { totalCount },
	} = useStaticQuery(graphql`
		{
			allWpProjectCategory {
				nodes {
					id
					name
					uri
					count
				}
			}
			totalCount: allWpProject {
				totalCount
			}
		}
	`);



	const { scroll } = useLocomotiveScroll();

	useEffect(() => {
		scroll && scroll.on('call', (value, way, obj) => {
			const $projectCategories = global.document.querySelector('.js-project-categories');

			if ($projectCategories && value === 'footer') {
				if (way === 'enter') {
					$projectCategories.classList.remove('is-active');
				}
				if (way === 'exit') {
					$projectCategories.classList.add('is-active');
				}
			}
		});
	}, [scroll]);


	return (
		<div
			className="Project-categories is-active js-project-categories"
			data-scroll
			data-scroll-sticky
			data-scroll-target="#wrapper">
			<ul className="Project-categories__items">
				<li className="Project-categories__item">
					<AniLink cover direction="up" bg="#000000" to="/work/">
						All<span>{totalCount}</span>
					</AniLink>
				</li>
				{projectCategories.map(category => listItem(category))}
			</ul>
		</div>
	);
};

export default ProjectCategories;
