export interface IScore {
	you: number;
	house: number;
}
export type TMode = 'freePoints' | 'theBestOf';
export type TPlayer = string | 'You';
export type TModeGame = {
	mode: TMode;
	games?: { total: number; played: number };
};
export interface IGameState {
	player: TPlayer;
	score: IScore;
	modeGame: TModeGame;
}

export type TGameActions =
	| {
			type: '[Game] SET_PLAYER';
			payload: TPlayer;
	  }
	| {
			type: '[Game] SET_SCORE';
			payload: IScore;
	  }
	| {
			type: '[Game] RESET_SCORE';
			payload: IScore;
	  }
	| {
			type: '[Game] SET_MODE_GAME';
			payload: TModeGame;
	  }
	| {
			type: '[Game] INCREMENT_MODE_GAME_TOTAL';
			payload: number;
	  }
	| {
			type: '[Game] DECREMENT_MODE_GAME_TOTAL';
			payload: number;
	  };
