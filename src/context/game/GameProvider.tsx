import { useReducer } from 'react';
import { gameReducer } from './GameReducer';
import { IGameState, TModeGame, TPlayer } from './interfaces';
import { GameContext } from './GameContext';
type Props = {
	children: JSX.Element | JSX.Element[];
};

export const INITIAL_STATE: IGameState = {
	player: 'You',
	score: { you: 0, house: 0 },
	modeGame: { mode: 'freePoints' },
};

export const GameProvider = ({ children }: Props) => {
	const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);
	const handlerSetPlayer = (playerName: TPlayer) =>
		dispatch({ type: '[Game] SET_PLAYER', payload: playerName });
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
	const handlerSetModeGame = (newMode: TModeGame) => {
		dispatch({
			type: '[Game] SET_MODE_GAME',
			payload: newMode,
		});
	};
	const handlerResetScore = () => {
		dispatch({ type: '[Game] RESET_SCORE', payload: { you: 0, house: 0 } });
	};

	const handlerIncrementTotalCounter = () => {
		dispatch({ type: '[Game] INCREMENT_MODE_GAME_TOTAL', payload: 2 });
	};
	const handlerDecrementTotalCounter = () => {
		dispatch({ type: '[Game] DECREMENT_MODE_GAME_TOTAL', payload: 2 });
	};
	return (
		<>
			<GameContext.Provider
				value={{
					gameState,
					handlerSetPlayer,
					handlerYouWin,
					handlerYouLose,
					handlerSetModeGame,
					handlerResetScore,
					handlerIncrementTotalCounter,
					handlerDecrementTotalCounter,
				}}
			>
				{children}
			</GameContext.Provider>
		</>
	);
};
