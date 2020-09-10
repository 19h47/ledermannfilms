import React, { useState, useEffect } from 'react';

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

const ButtonScrollTo = ({ el }) => {
	const scrollTo = () => window.scroll.scrollTo(el.current, 0);
	const [playing, toggle] = useAudio('/eject.mp3');

	const styles = {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	};

	return (
		<>
			<button
				style={styles}
				className={`${playing ? 'is-playing' : 'is-paused'}`}
				type="button"
				onClick={() => {
					scrollTo();
					toggle();
				}}>
				⏏
			</button>
		</>
	);
};

export default ButtonScrollTo;
