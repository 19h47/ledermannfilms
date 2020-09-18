import React from 'react';

import { Link } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '@/components/layout';

function BlogPost({ data }) {
	const { nextPage, previousPage, page } = data;
	const { title, content, featuredImage } = page;

	return (
		<Layout>
			<h1>{title}</h1>

			{!!featuredImage?.node?.localFile?.childImageSharp && (
				<Img fluid={featuredImage.node.localFile.childImageSharp.fluid} />
			)}

			<p dangerouslySetInnerHTML={{ __html: content }} />

			<br />
			{!!nextPage && <Link to={nextPage.uri}>Next: {nextPage.title}</Link>}
			<br />
			{!!previousPage && <Link to={previousPage.uri}>Previous: {previousPage.title}</Link>}
		</Layout>
	);
}

export default BlogPost;
