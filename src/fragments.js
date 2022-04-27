import { graphql } from 'gatsby';

export const fragments = graphql`
	fragment HeroImage on File {
		childImageSharp {
			gatsbyImageData(
				formats: [AUTO, WEBP]
			)
		}
	}
`;
