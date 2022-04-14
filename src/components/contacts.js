import React, { useContext, useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { gsap } from 'gsap';
import { CustomEase } from '../vendors/CustomEase';
import OutsideClickHandler from 'react-outside-click-handler';

import Socials from '@/components/socials';

import { ContactsContext } from '@/context/contacts-context';

import useInputEvent from '@/hooks/use-input-event';

import Times from '@/assets/svg/times.inline.svg';

gsap.registerPlugin(CustomEase);

function Contacts() {
	const contactsRef = useRef();
	const titleRef = useRef(null);
	const phoneRef = useRef(null);
	const addressRef = useRef(null);
	const mailRef = useRef(null);
	const socialsRef = useRef(null);

	const key = useInputEvent();
	const { contacts, toggleContacts, setContacts } = useContext(ContactsContext);
	const {
		wp: {
			generalSettings: { address, publicEmail, phoneNumber },
		},
	} = useStaticQuery(graphql`
		{
			wp {
				generalSettings {
					address
					publicEmail
					phoneNumber
				}
			}
		}
	`);

	useEffect(() => {
		if (null === key) {
			return;
		}

		if ('Escape' === key && contacts) {
			setContacts(false);
		}
	}, [key, contacts, setContacts]);

	useEffect(() => {
		const timeline = gsap.timeline({
			paused: true,
			defaults: { ease: CustomEase.create('custom', 'M0,0,C0.25,0,0.25,1,1,1') },
			onStart: () => gsap.set(contactsRef.current, { autoAlpha: 1 }),
			onReverseComplete: () => gsap.set(contactsRef.current, { autoAlpha: 0 }),
		});

		timeline.fromTo(
			contactsRef.current.querySelector('.js-background'),
			{ scaleY: 0 },
			{
				duration: 1,
				scaleY: 1,
			},
		);
		timeline.fromTo(
			titleRef.current.querySelector('button'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.2',
		);
		timeline.fromTo(
			titleRef.current.querySelector('.js-title'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.3',
		);
		timeline.fromTo(
			phoneRef.current.querySelector('span:nth-child(1)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.3',
		);
		timeline.fromTo(
			phoneRef.current.querySelector('span:nth-child(2)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.4',
		);
		timeline.fromTo(
			phoneRef.current.querySelector('hr'),
			{ scaleX: 0, opacity: 0 },
			{ scaleX: 1, opacity: 1, duration: 0.5 },
			'0.4',
		);
		timeline.fromTo(
			addressRef.current.querySelector('span:nth-child(1)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.4',
		);
		timeline.fromTo(
			addressRef.current.querySelector('span:nth-child(2)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.5',
		);
		timeline.fromTo(
			addressRef.current.querySelector('hr'),
			{ scaleX: 0, opacity: 0 },
			{ scaleX: 1, opacity: 1, duration: 0.5 },
			'0.5',
		);
		timeline.fromTo(
			mailRef.current.querySelector('span:nth-child(1)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.5',
		);
		timeline.fromTo(
			mailRef.current.querySelector('span:nth-child(2)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.6',
		);
		timeline.fromTo(
			mailRef.current.querySelector('hr'),
			{ scaleX: 0, opacity: 0 },
			{ scaleX: 1, opacity: 1, duration: 0.5 },
			'0.7',
		);
		timeline.fromTo(
			socialsRef.current.querySelector('span:nth-child(1)'),
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5 },
			'0.7',
		);
		timeline.fromTo(
			[...socialsRef.current.querySelectorAll('.js-item')],
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
			'0.8',
		);

		timeline.reverse();

		if (contacts) {
			timeline.play();
		} else {
			timeline.reverse(0);
		}
	}, [contacts]);

	return (
		<OutsideClickHandler onOutsideClick={() => setContacts(false)}>
			<div
				className="Contacts"
				data-scroll
				data-scroll-sticky
				data-scroll-target="#wrapper"
				ref={contactsRef}>
				<div
					className="Contacts__row d-flex align-items-center align-items-md-end position-relative justify-content-between"
					ref={titleRef}>
					<span className="mb-0 text-uppercase js-title">Contact informations</span>
					<button
						className="overflow-hidden Contacts__close d-flex align-items-center"
						type="button"
						onClick={toggleContacts}>
						<Times />
					</button>
				</div>
				<div
					className="Contacts__row d-flex align-items-center align-items-md-end position-relative"
					ref={phoneRef}>
					<span className="mb-0 text-uppercase">Phone</span>
					<span>{phoneNumber}</span>
					<hr className="position-absolute top-100 end-0 start-0" />
				</div>
				<div
					className="Contacts__row d-flex align-items-center align-items-md-end position-relative"
					ref={addressRef}>
					<span className="mb-0 text-uppercase">Address</span>
					<span>{address}</span>
					<hr className="position-absolute top-100 end-0 start-0" />
				</div>
				<div
					className="Contacts__row d-flex align-items-center align-items-md-end position-relative"
					ref={mailRef}>
					<span className="mb-0 text-uppercase">Mail</span>
					<span>
						<a href={`mailto:${publicEmail}`}>{publicEmail}</a>
					</span>
					<hr className="position-absolute top-100 end-0 start-0" />
				</div>
				<div
					className="Contacts__row d-flex align-items-center align-items-md-end position-relative"
					ref={socialsRef}>
					<span className="mb-0 text-uppercase">Social</span>
					<Socials />
					<hr className="position-absolute top-100 end-0 start-0" />
				</div>
				<div className="Contacts__background js-background"></div>
			</div>
		</OutsideClickHandler>
	);
}

export default Contacts;
