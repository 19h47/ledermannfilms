import React, { useContext } from 'react';

import { ModalContext } from '@/context/modal-context';

import Play from '@/assets/svg/play.inline.svg';

const ButtonShowreel = ({ video }) => {
	const { handleModal } = useContext(ModalContext);

	return (
		<button className="Button" type="button" data-scroll onClick={() => handleModal(video)}>
			<span>
				Watch the showreel
				<span class="Button__icon">
					<Play />
				</span>
			</span>
		</button>
	);
};

export default ButtonShowreel;
