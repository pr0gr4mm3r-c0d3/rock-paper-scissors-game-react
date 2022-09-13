export interface IGameState {
	score: number;
}

export type TGameActions =
	| {
			type: '[Game] SET_SCORE';
			payload: number;
	  }
	| {
			type: '[Game] RESET_SCORE';
			payload: number;
	  };
