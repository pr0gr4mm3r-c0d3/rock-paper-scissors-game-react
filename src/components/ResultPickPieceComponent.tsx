import { useEffect, useState } from 'react';
import { checkWinner } from '../helpers/checkWinner';
import { useGame } from '../hooks/useGame';
import { usePieces } from '../hooks/usePieces';
import { PieceComponent } from './PieceComponent';

export const ResultPickPieceComponent = () => {
	const [textResult, setTextResult] = useState<string>('');
	const {
		pieceState: { pieceSelected },
		handlerPlayAgain,
	} = usePieces();

	const { handlerYouWin } = useGame();

	const handlerCheckWinner = () => {
		const iWin = checkWinner(pieceSelected!);
		iWin === 'YOU WIN' && handlerYouWin();
		console.log(iWin);
		setTextResult(iWin);
	};

	useEffect(() => {
		handlerCheckWinner();
	}, [pieceSelected]);

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
					onClick={handlerPlayAgain}
					className='bg-white py-3 my-2 px-16 text-slate-900 rounded hover:text-red-500'
				>
					PLAY AGAIN
				</button>
			</div>
		</>
	);
};
