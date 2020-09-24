import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '@/context/modal-context';

import Times from '@/assets/svg/times.inline.svg';

const Modal = () => {
	const { modalContent, handleModal, modal } = useContext(ModalContext);

	if (modal) {
		return createPortal(
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
			</div>,
			global.document.querySelector('#modal-root'),
		);
	} else return null;
};

export default Modal;
