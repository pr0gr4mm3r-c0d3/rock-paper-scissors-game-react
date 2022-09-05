import { useContext } from 'react';
import { PieceContext } from '../context/piece/PieceContext';
export const usePieces = () => {
	const { pieceState, handlerPickPiece, handlerPlayAgain } =
		useContext(PieceContext);

	return {
		pieceState,
		handlerPickPiece,
		handlerPlayAgain,
	};
};
