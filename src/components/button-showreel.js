import React, { useContext } from 'react';

import { ModalContext } from '@/context/modal-context';

import Play from '@/assets/svg/play.inline.svg';

const ButtonShowreel = ({ video }) => {
	const { handleModal } = useContext(ModalContext);

	return (
		<button
			className="Button"
			type="button"
			data-scroll
			onClick={() => handleModal(video)}
			style={{ transitionDelay: '0.6s, 0s' }}>
			<span>
				Watch the showreel
				<Play />
			</span>
		</button>
	);
};

export default ButtonShowreel;
