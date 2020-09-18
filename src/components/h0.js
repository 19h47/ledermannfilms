import React from 'react';
import PropTypes from 'prop-types';

const H0 = ({ texts }) => {
	if (typeof texts === 'string') {
		texts = texts.split(/[\r\n]+/);
	}

	if (0 === texts.length) {
		return;
	}

	return (
		<h2 className="H0">
			{texts.map((text, index) => (
				<span className="H0__line" key={index} data-scroll>
					<span style={{ transitionDelay: `${texts.length * 0.2 + index * 0.2}s` }}>
						{text}
					</span>
				</span>
			))}
		</h2>
	);
};

H0.defaultProps = {
	texts: [],
};

H0.propTypes = {
	texts: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.string.isRequired]),
};

export default H0;
