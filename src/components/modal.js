import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '@/context/modal-context';

import Times from '@/assets/svg/times.inline.svg';

const Modal = ({ content }) => {
	const { toggleModal, modal } = useContext(ModalContext);

	const modalContent = (
		<div className={`Modal${modal ? ' is-active' : ''}`}>
			<div className="Site-container h-100">
				<div className="row h-100">
					<div className="col-14 h-100 position-relative">
						{content}
						<button
							className="Button"
							type="button"
							onClick={toggleModal}
							style={{
								lineHeight: 1,
								paddingTop: '16px',
								paddingBottom: '16px',
							}}>
							<span>
								Close
								<Times
									style={{
										width: '12px',
										height: '12px',
										minWidth: '12px',
									}}
								/>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);

	if (typeof document !== `undefined`) {
		return createPortal(modalContent, global.document.body);
	} else {
		return null;
	}
};

export default Modal;
