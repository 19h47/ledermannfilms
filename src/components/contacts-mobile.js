import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Socials from '@/components/socials';

import { ContactsContext } from '@/context/contacts-context';

import Times from '@/assets/svg/times.inline.svg';

function ContactsMobile() {
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
		<div className={`Contacts-mobile${active ? ' is-active' : ''}`}>
			<div className="Contacts-mobile__header">
				<button type="button" onClick={toggle}>
					<span>✦ Get in touch</span>
					<Times />
				</button>
			</div>
			<div className="Contacts-mobile__row">
				<div>Phone</div>
				<div>{phoneNumber}</div>
			</div>
			<div className="Contacts-mobile__row">
				<div>Address</div>
				<div>{address}</div>
			</div>
			<div className="Contacts-mobile__row">
				<div>Mail</div>
				<div>
					<a href="mailto:{publicEmail}">{publicEmail}</a>
				</div>
			</div>
			<div className="Contacts-mobile__row">
				<div>Social</div>
				<div>
					<Socials abbr={false} />
				</div>
			</div>
		</div>
	);
}

export default ContactsMobile;
