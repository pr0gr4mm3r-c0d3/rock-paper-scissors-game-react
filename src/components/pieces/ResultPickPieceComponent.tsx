import { useEffect, useState } from 'react';
import { checkWinner } from 'src/helpers/checkWinner';
import { useGame } from 'src/hooks/useGame';
import { usePieces } from 'src/hooks/usePieces';
import { PieceComponent } from './PieceComponent';

import './styles/PlayAgain.scss';
export const ResultPickPieceComponent = () => {
	const [textResult, setTextResult] = useState<string>('');
	const {
		pieceState: { pieceSelected },
		handlerPlayAgain,
	} = usePieces();

	const { handlerYouWin, handlerYouLose } = useGame();

	const handlerCheckWinner = () => {
		const iWin = checkWinner(pieceSelected!);
		if (iWin !== 'TIE')
			iWin === 'YOU WIN' ? handlerYouWin() : handlerYouLose();
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
