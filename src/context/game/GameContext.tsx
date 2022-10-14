import { createContext } from 'react';
import { IGameState, TModeGame, TPlayer } from './interfaces';

export type GameContextProps = {
	gameState: IGameState;
	handlerSetPlayer: (playerName: TPlayer) => void;
	handlerYouWin: () => void;
	handlerYouLose: () => void;
	handlerSetModeGame: (newMode: TModeGame) => void;
	handlerResetScore: () => void;
	handlerIncrementTotalCounter: () => void;
	handlerDecrementTotalCounter: () => void;
};

export const GameContext = createContext<GameContextProps>(
	{} as GameContextProps
);
