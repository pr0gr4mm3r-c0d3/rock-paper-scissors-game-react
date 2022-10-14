import { Fade } from 'react-awesome-reveal';
import { useModal } from '../../hooks/useModal';
import { ModalRulesComponent } from './ModalRulesComponent';

import './styles/Button.scss';

export const RulesBtnComponent = () => {
	const { showModal, handlerToggleModal } = useModal();
	return (
		<>
			<div className='btn__container flex  md:self-end'>
				<button
					className='btn md:mr-10 hover:bg-white hover:text-red-500 hover:scale-105 hover:shadow-2xl transition-all'
					onClick={handlerToggleModal}
				>
					Rules
				</button>
			</div>
			{showModal && (
				<ModalRulesComponent closeModal={handlerToggleModal} />
			)}
		</>
	);
};
