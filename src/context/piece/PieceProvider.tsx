import { useReducer } from 'react';
import { IPieceSelected, IPieceState } from './interfaces';
import { pieceReducer } from './PieceReducer';

import rock from '../../assets/pieces/icon-rock.svg';
import paper from '../../assets/pieces/icon-paper.svg';
import scissors from '../../assets/pieces/icon-scissors.svg';
import { PieceContext } from './PieceContext';
type Props = {
	children: JSX.Element | JSX.Element[];
};

export const INITIAL_STATE: IPieceState = {
	pieces: [
		{
			src: paper,
			alt: 'Paper Piece',
			piece: 'paper',
		},
		{
			src: scissors,
			alt: 'Scissors Piece',
			piece: 'scissors',
		},
		{
			src: rock,
			alt: 'Rock Piece',
			piece: 'rock',
		},
	],
	pieceSelected: null,
};

export const PieceProvider = ({ children }: Props) => {
	const [pieceState, dispatch] = useReducer(pieceReducer, INITIAL_STATE);

	const handlerPickPiece = (pieceSelected: IPieceSelected) =>
		dispatch({ type: '[Piece] Pick', payload: pieceSelected });
	const handlerPlayAgain = () => {
		dispatch({ type: '[Piece] Game Play Again', payload: INITIAL_STATE });
	};
	return (
		<>
			<PieceContext.Provider
				value={{ pieceState, handlerPickPiece, handlerPlayAgain }}
			>
				{children}
			</PieceContext.Provider>
		</>
	);
};
