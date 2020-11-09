import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { ModalContext } from '@/context/modal-context';

const Video = ({ src, type, className, dataScroll, ...props }) => {
	const { modal } = useContext(ModalContext);
	const videoRef = useRef();

	useEffect(() => {
		const video = videoRef.current;

		if (props.modal === 'true') {
			if (modal) {
				video.muted = false;
				video.currentTime = 0;
				video.play();
			} else {
				video.muted = true;
				video.pause();
			}
		}
	}, [modal, videoRef, props.modal]);

	return (
		<div className={className} data-scroll={dataScroll}>
			<video // eslint-disable-line
				ref={videoRef}
				playsInline
				{...props}>
				<source src={src} type={type} />
			</video>
		</div>
	);
};

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
