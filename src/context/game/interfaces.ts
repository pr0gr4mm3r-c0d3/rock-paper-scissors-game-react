export interface IScore {
	you: number;
	house: number;
}
export interface IGameState {
	score: IScore;
}

export type TGameActions =
	| {
			type: '[Game] SET_SCORE';
			payload: IScore;
	  }
	| {
			type: '[Game] RESET_SCORE';
			payload: IScore;
	  };
