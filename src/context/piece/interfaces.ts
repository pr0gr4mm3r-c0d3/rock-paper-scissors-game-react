export interface IPiece {
	src: string;
	alt: string;
	piece: 'rock' | 'scissors' | 'paper';
}

export interface IPieceSelected {
	you: IPiece;
	pc: IPiece;
}

export interface IPieceState {
	pieces: Readonly<IPiece[]>;
	pieceSelected: IPieceSelected | null;
}
export type TPieceActions =
	| {
			type: '[Piece] Pick';
			payload: IPieceSelected;
	  }
	| {
			type: '[Piece] Game Play Again';
			payload: IPieceState;
	  };
