import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame, usePieces } from 'src/hooks';
import { useSwal } from 'src/helpers/swal';
import { checkWinner } from 'src/helpers/checkWinner';
export const useResultPickPiece = () => {
	const [textResult, setTextResult] = useState<string>('');
	const [newGame, setNewGame] = useState<boolean>(false);

	const {
		pieceState: { pieceSelected },
		handlerPlayAgain,
	} = usePieces();

	const { gameState, handlerYouWin, handlerYouLose } = useGame();
	const navigate = useNavigate();
	const handlerCheckWinner = async () => {
		const iWin = checkWinner(pieceSelected!);
		const isYouWin = iWin === 'YOU WIN';
		if (iWin === 'TIE') {
			setTextResult(iWin);
			return;
		}
		isYouWin ? handlerYouWin() : handlerYouLose();
		setTextResult(iWin);
	};
	const newGameOrPickAgain = () => {
		handlerPlayAgain();
		newGame && navigate('/create');
	};
	useEffect(() => {
		handlerCheckWinner();
	}, [pieceSelected]);

	const {
		modeGame: { mode, games },
		score: { you, house },
	} = gameState;

	useEffect(() => {
		if (mode !== 'theBestOf') return;
		const total = games?.total!;
		const pointWinner = Math.round(total / 2);

		const conditionToSingVictory =
			total === you + house ||
			pointWinner === you ||
			pointWinner === house;

		const winner = you > house;

		conditionToSingVictory &&
			useSwal(winner).then((btn) =>
				btn ? navigate('/') : (setNewGame(true), setTextResult(''))
			);
	}, [you, house]);

	return {
		pieceSelected,
		textResult,
		newGame,
		newGameOrPickAgain,
	};
};
