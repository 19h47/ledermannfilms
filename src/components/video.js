import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src, type, className, ...props }) => (
	<div
		data-scroll
		className={className}
		dangerouslySetInnerHTML={{
			__html: `<video autoPlay muted playsInline preload loop>
				<source src=${src} type=${type} />
				</video>`,
		}}
	/>
);

export default Video;

Video.defaultProps = {
	type: 'video/mp4',
	className: '',
};

Video.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
};
