import { Fade, JackInTheBox } from 'react-awesome-reveal';
import { PickPieceComponent } from 'src/components/pieces/PickPieceComponent';
import { ResultPickPieceComponent } from 'src/components/pieces/ResultPickPieceComponent';
import { RulesBtnComponent } from 'src/components/rules/RulesBtnComponent';
import { ScoreComponent } from 'src/components/score/ScoreComponent';
import { usePieces } from 'src/hooks/usePieces';

import './styles.scss';

const App = () => {
	const {
		pieceState: { pieceSelected },
	} = usePieces();

	return (
		<>
			<div
				id='wrapper__app'
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
