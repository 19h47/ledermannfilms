import React from 'react';

const H0 = ({ texts }) => {
	if (typeof texts === 'string') {
		texts = texts.split(/[\r\n]+/);
	}

	return (
		<h2 className="H0" data-scroll>
			{texts.map((text, index) => (
				<span className="H0__line" key={index}>
					<span>{text}</span>
				</span>
			))}
		</h2>
	);
};

export default H0;
