import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src, type, className, dataScroll, ...props }) => (
	<div className={className} data-scroll={dataScroll}>
		<video // eslint-disable-line
			playsInline
			{...props}>
			<source src={src} type={type} />
		</video>
	</div>
);

export default Video;

Video.defaultProps = {
	src: '',
	type: 'video/mp4',
	className: '',
	autoPlay: true,
	muted: true,
	loop: true,
};

Video.propTypes = {
	src: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	autoPlay: PropTypes.bool,
	muted: PropTypes.bool,
	loop: PropTypes.bool,
};
