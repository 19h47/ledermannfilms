import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Socials from '@/components/socials';

import { ContactsContext } from '@/contacts-context';

import Times from '@/assets/svg/times.inline.svg';

function Contacts() {
	const { active, toggle } = useContext(ContactsContext);
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

	return (
		<div
			className={`Contacts${active ? ' is-active' : ''}`}
			data-scroll
			data-scroll-sticky
			data-scroll-target="#wrapper">
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
