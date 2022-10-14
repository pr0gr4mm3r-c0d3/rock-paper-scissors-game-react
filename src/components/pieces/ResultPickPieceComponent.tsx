import { PieceComponent } from './PieceComponent';
import { useResultPickPiece } from 'src/hooks';
import './styles/PlayAgain.scss';
export const ResultPickPieceComponent = () => {
	const { pieceSelected, textResult, newGame, newGameOrPickAgain } =
		useResultPickPiece();
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
				<h2 className='text-5xl'>{textResult}</h2>
				<button
					onClick={newGameOrPickAgain}
					className='bg-white py-3 my-2 px-16 text-slate-900 rounded shadow-2xl hover:text-red-500 hover:scale-105 transition-transform'
				>
					{newGame ? 'NEW GAME' : 'PICK AGAIN'}
				</button>
				{/* <button
					onClick={handlerPlayAgain}
					className='text-white py-3 my-2 px-14 bg-slate-600 rounded hover:scale-105 transition-transform'
				>
					RESET GAME
				</button> */}
			</div>
		</>
	);
};
