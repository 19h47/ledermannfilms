import React, { useState, useEffect } from 'react';

const useAudio = url => {
	const [audio] = useState(new window.Audio(url));
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

const ButtonScrollTo = () => {
	const scrollTo = () => window.scroll.scrollTo('#___gatsby', 0);
	const [playing, toggle] = useAudio('/eject.mp3');

	return (
		<>
			<button
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
