import { useState } from 'react';
import { useGame } from 'src/hooks';

interface IProps {
	initialState?: number;
}
export const CounterComponent = ({ initialState = 1 }: IProps) => {
	const {
		gameState,
		handlerIncrementTotalCounter,
		handlerDecrementTotalCounter,
	} = useGame();
	// const [counter, setCounter] = useState<number>(gameState.modeGame.total!);

	// ? Dispatch for increment and decrement total
	// const handlerIncrement = () => setCounter(counter + 2);
	// const handlerDecrement = () => counter !== 1 && setCounter(counter - 2);

	const { mode } = gameState.modeGame;
	// const count = mode === 'theBestOf' && gameState.modeGame.total
	return (
		<>
			<div className='flex justify-center gap-3'>
				<button
					className='bg-slate-800 px-2 py-1 rounded-md flex disabled:bg-slate-500'
					onClick={handlerDecrementTotalCounter}
					disabled={gameState.modeGame.games?.total! === 1}
				>
					-
				</button>
				<h3 className='text-2xl'>{gameState.modeGame.games?.total!}</h3>
				<button
					className='bg-slate-800 px-2 py-1 rounded-md flex'
					onClick={handlerIncrementTotalCounter}
				>
					+
				</button>
			</div>
		</>
	);
};
