import { IPiece } from '../context/piece/interfaces';
import { getRandomNumber } from '../helpers/getRandomNumber';
import { usePieces } from '../hooks/usePieces';

interface IProps {
	piece: IPiece;
	selected?: boolean;
}
export const PieceComponent = ({
	piece: { src, alt, piece },
	selected,
}: IProps) => {
	const { pieceState, handlerPickPiece } = usePieces();
	const handlerPick = () => {
		selected &&
			handlerPickPiece({
				you: { src, piece, alt },
				pc: pieceState.pieces[getRandomNumber()],
			});
	};
	return (
		<>
			<div
				className={`piece__container ${piece}_gradient ${
					selected && ' cursor-pointer'
				}`}
				onClick={handlerPick}
			>
				<img src={src} alt={alt} className='piece__img' />
			</div>
		</>
	);
};
