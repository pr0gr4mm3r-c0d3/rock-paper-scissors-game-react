import { Fade } from 'react-awesome-reveal';
import { useModal } from '../hooks/useModal';
import { ModalRulesComponent } from './ModalRulesComponent';

export const RulesBtnComponent = () => {
	const { showModal, handlerToggleModal } = useModal();
	return (
		<>
			<div className='btn__container flex  md:self-end'>
				<button className='btn' onClick={handlerToggleModal}>
					Rules
				</button>
			</div>
			{showModal && (
				<ModalRulesComponent closeModal={handlerToggleModal} />
			)}
		</>
	);
};
