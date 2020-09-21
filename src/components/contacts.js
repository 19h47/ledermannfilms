import React, { useContext, useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Socials from '@/components/socials';

import { ContactsContext } from '@/context/contacts-context';

import useOutsideClick from '@/hooks/use-outside-click';
import useInputEvent from '@/hooks/use-input-event';

import Times from '@/assets/svg/times.inline.svg';

function Contacts() {
	const contactsRef = useRef(null);
	const key = useInputEvent();
	const { active, toggle, setActive } = useContext(ContactsContext);
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

	useOutsideClick(contactsRef, () => active && setActive(false));

	useEffect(() => {
		if (null === key) {
			return;
		}

		if ('Escape' === key && active) {
			setActive(false);
		}
	}, [key, active, setActive]);

	return (
		<div
			className={`Contacts${active ? ' is-active' : ''}`}
			data-scroll
			data-scroll-sticky
			data-scroll-target="#wrapper"
			ref={contactsRef}>
			<div className="Contacts__row justify-content-between">
				<span>Contact informations</span>
				<button className="Contacts__close" type="button" onClick={toggle}>
					<span>Close</span>
					<Times />
				</button>
			</div>
			<div className="Contacts__row">
				<span>Phone</span>
				{phoneNumber}
			</div>
			<div className="Contacts__row">
				<span>Address</span>
				{address}
			</div>
			<div className="Contacts__row">
				<span>Mail</span>
				<a href="mailto:{publicEmail}">{publicEmail}</a>
			</div>
			<div className="Contacts__row">
				<span>Social</span>
				<Socials />
			</div>
		</div>
	);
}

export default Contacts;
