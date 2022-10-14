import { IGameState, TGameActions } from './interfaces';
import { ETypesActionsGame } from './enumsTypeActions';

const {
	SET_PLAYER,
	SET_SCORE,
	RESET_SCORE,
	SET_MODE_GAME,
	INCREMENT_MODE_GAME_TOTAL,
	DECREMENT_MODE_GAME_TOTAL,
} = ETypesActionsGame;

export const gameReducer = (
	state: IGameState,
	{ type, payload }: TGameActions
) => {
	switch (type) {
		case SET_PLAYER:
			return { ...state, player: payload };
		case SET_SCORE:
			return { ...state, score: { ...payload } };
		case SET_MODE_GAME:
			return { ...state, modeGame: { ...payload } };
		case RESET_SCORE:
			return { ...state, score: { you: 0, house: 0 } };
		case INCREMENT_MODE_GAME_TOTAL:
			return {
				...state,
				modeGame: {
					mode: state.modeGame.mode,
					games: {
						total: state.modeGame.games?.total! + payload,
						played: 0,
					},
				},
			};
		case DECREMENT_MODE_GAME_TOTAL:
			return {
				...state,
				modeGame: {
					mode: state.modeGame.mode,
					games: {
						total:
							state.modeGame.games?.total! > 1
								? state.modeGame.games?.total! - payload
								: 1,
						played: 0,
					},
				},
			};

		default:
			return state;
	}
};
