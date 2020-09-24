import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src, type, muted, autoPlay, className, ...props }) => {
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{
				__html: `<video autoPlay muted=${muted} playsInline preload loop>
				<source src=${src} type=${type} />
				</video>`,
			}}
		/>
	);
};

export default Video;

Video.defaultProps = {
	type: 'video/mp4',
	muted: false,
	autoPlay: true,
	className: '',
};

Video.propTypes = {
	type: PropTypes.string,
	muted: PropTypes.bool,
	autoPlay: PropTypes.bool,
	className: PropTypes.string,
};
