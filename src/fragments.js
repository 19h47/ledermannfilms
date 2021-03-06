import { graphql } from 'gatsby';

export const fragments = graphql`
	fragment HeroImage on File {
		childImageSharp {
			fluid(maxWidth: 1502) {
				...GatsbyImageSharpFluid_withWebp
			}
			gatsbyImageData
			fixed {
				width
				height
			}
		}
	}
`;
