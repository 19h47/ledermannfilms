import React, { useContext } from 'react';

import Modal from '@/components/modal';

import { ModalContext } from '@/context/modal-context';

import Play from '@/assets/svg/play.inline.svg';

const ButtonShowreel = ({ video, title = 'Watch the showreel' }) => {
	const { toggleModal } = useContext(ModalContext);

	return (
		<>
			<button className="Button" type="button" data-scroll onClick={() => toggleModal(video)}>
				<span>
					{title}
					<span className="Button__icon">
						<Play />
					</span>
				</span>
			</button>
			<Modal content={video} />
		</>
	);
};

export default ButtonShowreel;
