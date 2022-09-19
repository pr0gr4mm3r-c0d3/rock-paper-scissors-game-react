import { createContext } from 'react';
import { IGameState } from './interfaces';

export type GameContextProps = {
	gameState: IGameState;
	handlerYouWin: () => void;
	handlerYouLose: () => void;
	handlerResetScore: () => void;
};

export const GameContext = createContext<GameContextProps>(
	{} as GameContextProps
);
