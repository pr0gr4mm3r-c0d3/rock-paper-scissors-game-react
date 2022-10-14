import { useGame } from 'src/hooks/useGame';
import './styles.scss';
import { ScorePanelPointComponent } from './ScorePanelPointComponent';
export const ScoreComponent = () => {
	const { gameState } = useGame();

	return (
		<>
			<section className='score__panel my-5 w-full'>
				<h3 className='text-center text-4xl py-2'>Score Panel</h3>
				<div className='flex justify-between items-center'>
					<ScorePanelPointComponent
						title={gameState.player}
						score={gameState.score.you}
					/>
					<h2 className='text-5xl'>VS</h2>
					<ScorePanelPointComponent
						title='House'
						score={gameState.score.house}
					/>
				</div>
			</section>
		</>
	);
};
