import React from 'react';

import Seo from '@/components/Seo';
import Header from '@/components/Header';

import '@/stylesheets/styles.scss';

const Layout = ({ children }) => {
	return (
		<div>
			<Seo title={children.props.children} />
			<Header />

			{children}
		</div>
	);
};

export default Layout;
