import React from 'react';

const H0 = ({ texts }) => {
	if (typeof texts === 'string') {
		texts = texts.split(/[\r\n]+/);
	}

	return (
		<h2 className="H0">
			{texts.map((text, index) => (
				<span className="H0__line" key={index} data-scroll>
					<span style={{ transitionDelay: `${texts.length * 0.1 + index * 0.1}s` }}>
						{text}
					</span>
				</span>
			))}
		</h2>
	);
};

export default H0;
