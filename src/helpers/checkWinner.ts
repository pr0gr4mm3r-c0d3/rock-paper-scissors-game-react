import { IPiece, IPieceSelected } from '../context/piece/interfaces';

const rules = [
	{ pick: 'rock', winner: 'scissors' },
	{ pick: 'scissors', winner: 'paper' },
	{ pick: 'paper', winner: 'rock' },
];

export const checkWinner = ({ you, pc }: IPieceSelected): string => {
	if (you.piece === pc.piece) return 'TIE';
	const found = rules.find(({ pick }) => pick === you.piece);
	return found && found.winner === pc.piece ? 'YOU WIN' : 'YOU LOSE';
};
