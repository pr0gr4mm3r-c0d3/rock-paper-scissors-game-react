import { Fade, Flip, JackInTheBox, Rotate } from 'react-awesome-reveal';
import { PickPieceComponent } from './components/PickPieceComponent';
import { ResultPickPieceComponent } from './components/ResultPickPieceComponent';
import { RulesBtnComponent } from './components/RulesBtnComponent';
import { ScoreComponent } from './components/ScoreComponent';
import { usePieces } from './hooks/usePieces';

import './styles/App.scss';

const App = () => {
	const {
		pieceState: { pieceSelected },
	} = usePieces();

	return (
		<>
			<div
				id='wrapper'
				className='flex flex-col justify-between items-center'
			>
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
