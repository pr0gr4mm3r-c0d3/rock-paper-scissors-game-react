import { createContext } from 'react';
import { IPieceSelected, IPieceState } from './interfaces';

export type PieceContextProps = {
	pieceState: IPieceState;
	handlerPickPiece: ({ you, pc }: IPieceSelected) => void;
	handlerPlayAgain: () => void;
};

export const PieceContext = createContext<PieceContextProps>(
	{} as PieceContextProps
);
