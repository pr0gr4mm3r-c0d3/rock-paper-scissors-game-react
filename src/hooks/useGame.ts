import { useContext } from 'react';
import { GameContext } from '../context/game/GameContext';
export const useGame = () => {
	const gameContext = useContext(GameContext);
	return { ...gameContext };
};
