import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const useAudio = url => {
	const [audio] = useState(typeof Audio !== 'undefined' && new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [audio]);

	return [playing, toggle];
};

const ButtonScrollTo = ({ style }) => {
	const [playing, toggle] = useAudio('/eject.mp3');
	const { scroll } = useLocomotiveScroll();

	const styles = {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		...style,
	};

	return (
		<>
			<button
				style={styles}
				className={`${playing ? 'is-playing' : 'is-paused'}`}
				type="button"
				onClick={() => {
					scroll.scrollTo(scroll.el);
					toggle();
				}}>
				⏏
			</button>
		</>
	);
};

ButtonScrollTo.defaultProps = {
	style: {},
};

ButtonScrollTo.propTypes = {
	style: PropTypes.object,
};

export default ButtonScrollTo;
