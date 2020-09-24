import { useState } from 'react';

export default () => {
	const [modal, setModal] = useState(false);
	const [modalContent, setModalContent] = useState("I'm the Modal Content");

	const handleModal = (content = false) => {
		setModal(!modal);
		if (content) {
			setModalContent(content);
		}
	};

	return { modal, handleModal, modalContent };
};
