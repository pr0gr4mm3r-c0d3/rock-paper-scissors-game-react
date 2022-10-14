import { useEffect, useState } from 'react';
import { Fade, JackInTheBox } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { PickPieceComponent } from 'src/components/pieces/PickPieceComponent';
import { ResultPickPieceComponent } from 'src/components/pieces/ResultPickPieceComponent';
import { RulesBtnComponent } from 'src/components/rules/RulesBtnComponent';
import { ScoreComponent } from 'src/components/score/ScoreComponent';
import { useGame } from 'src/hooks/useGame';
import { usePieces } from 'src/hooks/usePieces';

import './styles.scss';

const App = () => {
	const { gameState, handlerResetScore } = useGame();
	const {
		pieceState: { pieceSelected },
		handlerPlayAgain,
	} = usePieces();

	useEffect(() => {
		handlerResetScore();
		handlerPlayAgain();
	}, []);
	const { modeGame } = gameState;
	const [countGame, setCountGame] = useState(modeGame.games?.total || 0);

	return (
		<>
			<div
				id='wrapper__app'
				className='flex flex-col justify-between items-center'
			>
				<Link
					to={'/'}
					className='my-5 px-3 py-2 bg-white text-slate-900 rounded'
				>
					Go to main
				</Link>

				{modeGame.mode === 'theBestOf' && modeGame.games?.total && (
					<h3 className='text-3xl font-bold'>
						The best of{' '}
						<span className='text-red-500'>
							{modeGame.games.total}
						</span>{' '}
						games
					</h3>
				)}

				<ScoreComponent />
				<section className='max-w-3xl container flex-col justify-between gap-2'>
					{!pieceSelected ? (
						<JackInTheBox>
							<PickPieceComponent />
						</JackInTheBox>
					) : (
						<Fade>
							<ResultPickPieceComponent />
						</Fade>
					)}
				</section>
				<RulesBtnComponent />
			</div>
		</>
	);
};
export default App;
