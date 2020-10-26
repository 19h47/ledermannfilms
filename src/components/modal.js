import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { ModalContext } from '@/context/modal-context';

import Times from '@/assets/svg/times.inline.svg';

const Modal = () => {
	const { modalContent, handleModal, modal } = useContext(ModalContext);

	const modalMarkup = (
		<div className="Modal">
			<div className="Site-container h-100">
				<div className="row h-100">
					<div className="col-14 h-100 position-relative">
						{modalContent}
						<button
							className="Button"
							type="button"
							onClick={handleModal}
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

	return createPortal(
		<CSSTransition in={modal} timeout={1600} classNames="modal">
			{modal ? modalMarkup : <div></div>}
		</CSSTransition>,
		global.document.body,
	);
};

export default Modal;
