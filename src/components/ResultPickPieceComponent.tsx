import { checkWinner } from '../helpers/checkWinner';
import { usePieces } from '../hooks/usePieces';
import { PieceComponent } from './PieceComponent';

export const ResultPickPieceComponent = () => {
	const {
		pieceState: { pieceSelected },
		handlerPlayAgain,
	} = usePieces();

	return (
		<>
			<div className='flex  justify-between items-center relative'>
				<div className='flex flex-col-reverse md:flex-col items-center'>
					<h4 className='my-5 text-2xl text-center'>You Picked</h4>
					{pieceSelected && (
						<PieceComponent piece={pieceSelected.you} />
					)}
				</div>
				<div className='flex flex-col-reverse md:flex-col items-center'>
					<h4 className='my-5 text-2xl text-center'>
						The House Picked
					</h4>
					{pieceSelected && (
						<PieceComponent piece={pieceSelected.pc} />
					)}
				</div>
			</div>
			<div className='flex flex-col justify-center items-center play-again__container'>
				<h2 className='text-5xl'>
					{pieceSelected && checkWinner(pieceSelected)}
				</h2>
				<button
					onClick={handlerPlayAgain}
					className='bg-white py-3 my-2 px-16 text-slate-900 rounded hover:text-red-500'
				>
					PLAY AGAIN
				</button>
			</div>
		</>
	);
};
