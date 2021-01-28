import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '@/components/layout';
import H0 from '@/components/h0';

const Error404 = () => (
	<Layout className="error404">
		<div className="Site-container h-100">
			<div className="row h-100">
				<div className="col-14 d-flex flex-column align-items-center justify-content-center">
					<H0 texts={'Erreur 404'} delay={1} />
					<AniLink
						className="Button"
						to="/"
						data-scroll
						cover
						direction="up"
						bg="#000000">
						<span>Go back home</span>
					</AniLink>
				</div>
			</div>
		</div>

		<div className="error404__image" data-scroll>
			<img src="/404.gif" alt="" />
		</div>
	</Layout>
);

export default Error404;
