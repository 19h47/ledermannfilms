import React from 'react';

import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import ButtonShowreel from '@/components/button-showreel';
import H0 from '@/components/h0';
import Video from '@/components/video';

import { ModalProvider } from '@/context/modal-context';

import Th from '@/assets/svg/th.inline.svg';

const ProjectHero = ({ project }) => {
	const {
		title,
		customFields: { hero },
		featuredImage: { node: thumbnail },
	} = project;

	const heroThumbnail = thumbnail => (
		<div className="Hero__thumbnail" data-scroll>
			<Img
				fadeIn={true}
				backgroundColor={'black'}
				durationFadeIn={1000}
				fluid={thumbnail.localFile.childImageSharp.fluid}
			/>
		</div>
	);

	const heroVideo = ({ video, scroll, ...props }) => {
		return (
			<Video
				src={video.guid}
				type={video.mimeType}
				className="Hero__video"
				dataScroll={scroll}
				{...scroll}
				{...props}
			/>
		);
	};

	return (
		<div className="Hero">
			<div className="Site-container h-100">
				<div className="Hero__body h-100">
					<div className="Hero__content">
						<div className="row">
							<div className="col-14 col-md-12 offset-md-1">
								<H0 texts={hero.title ? hero.title : title} />
							</div>
						</div>
					</div>

					<footer className="Hero__footer">
						<div className="row d-flex align-items-end align-items-md-center">
							<div className="col-14 col-md-6 offset-md-1 order-4 order-md-0">
								{hero.video && hero.video.guid && (
									<ModalProvider>
										<ButtonShowreel
											video={heroVideo({
												video: hero.video,
												muted: false,
											})}
										/>
									</ModalProvider>
								)}
							</div>
							<div className="col-7 col-md-2 order-0 order-md-1"></div>
							<div className="col-14 offset-md-3 col-md-2 order-1 order-md-2 d-flex d-md-block justify-content-between justify-content-md-end">
								<AniLink
									className="All-projects smallcaps w-100 justify-content-between justify-content-md-start"
									to="/work/"
									cover
									direction="up"
									bg="#000000"
									data-scroll>
									<div className="d-flex align-items-center">
										<span>all projects</span>
										<Th />
									</div>
								</AniLink>
							</div>
							<div className="col-14 order-3 d-md-none">
								<hr />
							</div>
						</div>
					</footer>

					{hero.video && hero.video.guid
						? heroVideo({ video: hero.video, scroll: true })
						: heroThumbnail(thumbnail)}
				</div>
			</div>
		</div>
	);
};

export default ProjectHero;
