import { IPieceState, TPieceActions } from './interfaces';

export const pieceReducer = (
	state: IPieceState,
	{ type, payload }: TPieceActions
) => {
	switch (type) {
		case '[Piece] Pick':
			return { ...state, pieceSelected: { ...payload } };
		case '[Piece] Game Play Again':
			return { ...payload };
		default:
			return state;
	}
};
