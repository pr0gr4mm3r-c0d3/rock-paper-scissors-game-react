import { IGameState, TGameActions } from './interfaces';

export const gameReducer = (
	state: IGameState,
	{ type, payload }: TGameActions
) => {
	switch (type) {
		case '[Game] SET_SCORE':
			return { ...state, score: { ...payload } };
		case '[Game] RESET_SCORE':
			return { ...state, score: { you: 0, house: 0 } };
		default:
			return state;
	}
};
