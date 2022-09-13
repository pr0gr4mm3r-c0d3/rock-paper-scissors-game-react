import { useReducer } from 'react';
import { gameReducer } from './GameReducer';
import { IGameState } from './interfaces';
import { GameContext } from './GameContext';
type Props = {
	children: JSX.Element | JSX.Element[];
};

export const INITIAL_STATE: IGameState = {
	score: 0,
};

export const GameProvider = ({ children }: Props) => {
	const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);
	const handlerYouWin = () => {
		const increment = gameState.score + 1;
		dispatch({ type: '[Game] SET_SCORE', payload: increment });
	};
	const handlerResetScore = () => {
		dispatch({ type: '[Game] RESET_SCORE', payload: 0 });
	};
	return (
		<>
			<GameContext.Provider
				value={{ gameState, handlerYouWin, handlerResetScore }}
			>
				{children}
			</GameContext.Provider>
		</>
	);
};
