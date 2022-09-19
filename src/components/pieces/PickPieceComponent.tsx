import { usePieces } from '../../hooks/usePieces';
import { PieceComponent } from './PieceComponent';

import './styles/PickPiece.scss';
export const PickPieceComponent = () => {
	const {
		pieceState: { pieces, pieceSelected },
	} = usePieces();
	const [paper, scissors, rock] = pieces;
	return (
		<>
			<section className='w-full pick__pieces-container max-w-2xl'>
				<div className='pool__up'>
					<PieceComponent piece={paper} selected />
					<PieceComponent piece={scissors} selected />
				</div>
				<div className='pool__down'>
					<PieceComponent piece={rock} selected />
				</div>
			</section>
		</>
	);
};
