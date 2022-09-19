import { useContext } from 'react';
import { PieceContext } from '../context/piece/PieceContext';
export const usePieces = () => {
	const pieceContext = useContext(PieceContext);

	return { ...pieceContext };
};
