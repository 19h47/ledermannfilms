const path = require('path');

require('dotenv').config({
	path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
});

// require .env.development or .env.production
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Ledermann Films`,
		description: `Freelance Film director and Photographer`,
		author: `@19h47`,
	},
	plugins: [
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: process.env.WPGRAPHQL_URL || `https://wp.ledermannfilms.com/graphql`,
				schema: {
					timeout: 60000,
					perPage: 50,
				},
				type: {
					Post: {
						limit:
							process.env.NODE_ENV === `development`
								? // Lets just pull 50 posts in development to make it easy on ourselves.
								50
								: // and we don't actually need more than 5000 in production for this particular site
								5000,
					},
				},
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/, // See below to configure properly
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ledermann Films`,
				short_name: `ledermannfilms`,
				start_url: `.`,
				background_color: `#121212`,
				theme_color: `#121212`,
				display: `minimal-ui`,
				icon: `src/assets/images/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@': path.resolve(__dirname, 'src'),
				},
				extensions: ['js'],
			},
		},
		`gatsby-plugin-offline`,
	],
};
