import { useState } from 'react';

export const useModal = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const handlerToggleModal = () => setShowModal(!showModal);
	return {
		showModal,
		handlerToggleModal,
	};
};
