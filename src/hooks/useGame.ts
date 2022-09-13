import { useContext } from 'react';
import { GameContext } from '../context/game/GameContext';
export const useGame = () => {
	const { gameState, handlerYouWin, handlerResetScore } =
		useContext(GameContext);

	return { gameState, handlerYouWin, handlerResetScore };
};
