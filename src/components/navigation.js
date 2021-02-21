import React, { useContext, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from '../vendors/CustomEase';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { ContactsContext } from '@/context/contacts-context';
import { NavigationContext } from '@/context/navigation-context';

import SiteName from '@/components/site-name';
import Socials from '@/components/socials';

import Times from '@/assets/svg/times.inline.svg';

export default () => {
	const { toggleContacts } = useContext(ContactsContext);
	const { navigation, toggleNavigation } = useContext(NavigationContext);
	const { scroll } = useLocomotiveScroll();

	const navigationRef = useRef();
	const headerRef = useRef();
	const bodyRef = useRef();
	const footerRef = useRef();

	const { wpMenu } = useStaticQuery(graphql`
		{
			wpMenu(slug: { eq: "primary" }) {
				name
				menuItems {
					nodes {
						label
						path
						id
					}
				}
			}
		}
	`);

	useEffect(() => {
		const timeline = gsap.timeline({
			paused: true,
			defaults: { ease: CustomEase.create('custom', 'M0,0,C0.25,0,0.25,1,1,1') },
			onStart: () => gsap.set(navigationRef.current, { autoAlpha: 1 }),
			onReverseComplete: () => gsap.set(navigationRef.current, { autoAlpha: 0 }),
		});

		timeline.fromTo(
			navigationRef.current.querySelector('.js-background'),
			{ scaleY: 0 },
			{
				duration: 1,
				scaleY: 1,
			},
		);

		timeline.fromTo(
			headerRef.current.querySelector('a'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 }
		);

		timeline.fromTo(
			headerRef.current.querySelector('button'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'-=0.3'
		);

		timeline.fromTo(
			[...bodyRef.current.querySelectorAll('.js-item')],
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
			'-=0.3'
		);

		timeline.fromTo(
			[...footerRef.current.querySelectorAll('a')],
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
			'-=0.3'
		);

		timeline.reverse();

		if (navigation) {
			timeline.play();
		} else {
			timeline.reverse(0);
		}
	}, [navigation]);

	return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
		<div className="Navigation" ref={navigationRef}>
			<div className="Navigation__header" ref={headerRef}>
				<SiteName />
				<button className="Navigation__close" type="button" onClick={toggleNavigation}> {/* eslint-disable-line jsx-a11y/control-has-associated-label */}
					<Times />
				</button>
			</div>
			<div className="Navigation__body" >
				<ul className="Navigation__items" ref={bodyRef}>
					{wpMenu.menuItems.nodes.map(menuItem => {
						return (
							<li className="Navigation__item" key={menuItem.id}>
								<AniLink
									className="js-item"
									to={menuItem.path}
									cover
									direction="up"
									bg="#000000"
									onClick={toggleNavigation}
									trigger={() => {
										setTimeout(() => {
											scroll.scrollTo(0, {
												duration: 0,
												disableLerp: true
											})
										}, 800);
									}}>
									<span>{menuItem.label}</span>
								</AniLink>
							</li>
						);
					})}
					<li className="Navigation__item">
						<button className="js-item" type="button" onClick={toggleContacts}>
							<span>Contact</span>
						</button>
					</li>
				</ul>
			</div>
			<div className="Navigation__footer" ref={footerRef}><Socials /></div>
			<div className="Navigation__background js-background"></div>
		</div >
	) : null;
};
