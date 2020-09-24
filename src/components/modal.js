import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '@/context/modal-context';

const Modal = () => {
	const { modalContent, handleModal, modal } = useContext(ModalContext);

	if (modal) {
		return createPortal(
			<div className="Modal">
				<div className="Site-container h-100">
					<div className="row h-100">
						<div className="col-14 h-100 position-relative">
							{modalContent}
							<button className="Button" type="button" onClick={handleModal}>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>,
			global.document.querySelector('#modal-root'),
		);
	} else return null;
};

export default Modal;
