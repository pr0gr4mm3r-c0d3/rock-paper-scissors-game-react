import { Link } from 'react-router-dom';
import { CounterComponent } from 'src/components/counter/CounterComponent';
import { useCreateGame } from 'src/hooks';
import './styles.scss';
export const CreateGameView = () => {
	const {
		formValues,
		modeGame,
		errorMessage,
		handlerInputChange,
		handlerSelectModeGame,
		handlerCreateGame,
	} = useCreateGame();
	const { playerName, mode } = formValues;
	return (
		<>
			<h2 className='text-3xl text-center uppercase font-semibold'>
				Create Game
			</h2>
			<div className='flex flex-col py-1'>
				<label htmlFor='playerName' className='cursor-pointer text-xl'>
					Player Name
				</label>
				<input
					autoFocus
					autoComplete='off'
					type='text'
					name='playerName'
					placeholder='John Doe'
					className=' my-2 bg-slate-800 rounded-sm border-b-2 border-slate-400 text-white p-2 focus:outline-none'
					value={playerName}
					onChange={handlerInputChange}
				/>
				<span className='text-red-500 my-2'>{errorMessage}</span>
			</div>
			<h3 className='text-xl py-2'>Type Game Score</h3>
			<div className='flex items-center gap-3'>
				<input
					onChange={handlerSelectModeGame}
					type='radio'
					className='bg-transparent'
					name='mode'
					id='freePoints'
					value='freePoints'
					defaultChecked
				/>
				<label htmlFor='freePoints' className='cursor-pointer'>
					Free
				</label>
			</div>
			<div className='flex items-center gap-3'>
				<input
					onChange={handlerSelectModeGame}
					type='radio'
					name='mode'
					id='theBestOf'
					value='theBestOf'
				/>
				<label htmlFor='theBestOf' className='cursor-pointer'>
					The Best of:
				</label>
				{formValues.mode === 'theBestOf' && (
					<CounterComponent
						initialState={
							modeGame.mode === 'theBestOf'
								? modeGame.games?.total
								: 1
						}
					/>
				)}
			</div>
			<div className='flex flex-col justify-center my-5 gap-3'>
				<button
					className='w-full py-2 px-3 rounded bg-white text-slate-900 cursor-pointer'
					onClick={handlerCreateGame}
				>
					Play Game
				</button>

				<Link
					to={'/'}
					className='text-center w-full py-2 px-3 rounded bg-transparent text-white border hover:bg-slate-400 hover:text-slate-900 transition ease-in-out'
				>
					Back
				</Link>
			</div>
		</>
	);
};
