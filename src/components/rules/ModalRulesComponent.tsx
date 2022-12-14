import close from 'src/assets/icons/icon-close.svg';
import rules from 'src/assets/imgs/image-rules.svg';

import './styles/Modal.scss';

interface IProps {
	closeModal: () => void;
}

export const ModalRulesComponent = ({ closeModal }: IProps) => {
	return (
		<>
			<section className='modal'>
				<div className='modal__content'>
					<img
						src={rules}
						alt='Rules Game'
						className='modal__img-rules'
					/>
					<div className='modal__close text-2xl flex my-5 justify-center md:justify-between'>
						<p className='modal__close-title text-4xl'>Rules</p>
						<img
							src={close}
							alt='btn close'
							className='modal__close-icon cursor-pointer'
							onClick={closeModal}
						/>
					</div>
				</div>
			</section>
		</>
	);
};
