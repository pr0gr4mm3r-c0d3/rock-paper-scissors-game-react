import { TMode } from './../context/game/interfaces';
import { useNavigate } from 'react-router-dom';
import { useForm, useGame } from 'src/hooks';
import { useEffect, ChangeEvent, useState } from 'react';
export const useCreateGame = () => {
	const { gameState, handlerSetPlayer, handlerSetModeGame } = useGame();
	const { formValues, handlerInputChange } = useForm<{
		playerName: string;
		mode: TMode;
	}>({
		playerName: gameState.player,
		mode: gameState.modeGame.mode,
	});
	const [errorMessage, setErrorMessage] = useState<string>('');
	const { modeGame } = gameState;
	const { playerName } = formValues;
	const navigate = useNavigate();
	const handlerSelectModeGame = (input: ChangeEvent<HTMLInputElement>) => {
		handlerInputChange(input);
		const { value } = input.target;
		const mode = value as TMode;
		handlerSetModeGame(
			mode === 'theBestOf'
				? { mode, games: { total: 1, played: 0 } }
				: { mode }
		);
	};

	const handlerCreateGame = () => {
		try {
			const player = playerName.trim();
			if (!player) {
				setErrorMessage('Player name is required');
				return;
			}
			if (player.length < 3 || player.length > 10) {
				setErrorMessage('Must have between 3 and 10 characters');
				return;
			}
			handlerSetPlayer(player);
			navigate('/game');
		} catch (error) {
			alert(error);
		}
	};
	useEffect(() => {
		handlerSetModeGame({ mode: 'freePoints' });
		formValues.mode = 'freePoints';
	}, []);

	return {
		formValues,
		modeGame,
		errorMessage,
		handlerInputChange,
		handlerSelectModeGame,
		handlerCreateGame,
	};
};
