import React from 'react';
import PropTypes from 'prop-types';

const H0 = ({ texts, delay }) => {
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
					<span style={{ transitionDelay: `${index * 0.15 + delay}s` }}>{text}</span>
				</span>
			))}
		</h2>
	);
};

H0.defaultProps = {
	texts: [],
	delay: 0,
};

H0.propTypes = {
	texts: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.string.isRequired]),
	delay: PropTypes.number,
};

export default H0;
