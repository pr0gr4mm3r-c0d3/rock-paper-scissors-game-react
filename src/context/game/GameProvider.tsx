import { useReducer } from 'react';
import { gameReducer } from './GameReducer';
import { IGameState } from './interfaces';
import { GameContext } from './GameContext';
type Props = {
	children: JSX.Element | JSX.Element[];
};

export const INITIAL_STATE: IGameState = {
	score: { you: 0, house: 0 },
};

export const GameProvider = ({ children }: Props) => {
	const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);
	const handlerYouWin = () => {
		const { you, house } = gameState.score;
		dispatch({
			type: '[Game] SET_SCORE',
			payload: { you: you + 1, house },
		});
	};
	const handlerYouLose = () => {
		const { you, house } = gameState.score;
		dispatch({
			type: '[Game] SET_SCORE',
			payload: { house: house + 1, you },
		});
	};
	const handlerResetScore = () => {
		dispatch({ type: '[Game] RESET_SCORE', payload: { you: 0, house: 0 } });
	};
	return (
		<>
			<GameContext.Provider
				value={{
					gameState,
					handlerYouWin,
					handlerYouLose,
					handlerResetScore,
				}}
			>
				{children}
			</GameContext.Provider>
		</>
	);
};
