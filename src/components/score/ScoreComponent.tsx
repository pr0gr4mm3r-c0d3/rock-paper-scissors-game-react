import { useGame } from 'src/hooks/useGame';
import imgLogo from 'src/assets/logos/logo.svg';
import './styles.scss';
import { ScorePanelPointComponent } from './ScorePanelPointComponent';
export const ScoreComponent = () => {
	const { gameState } = useGame();

	return (
		<>
			{/* <img className='score__panel-img' src={imgLogo} alt='Logo App' /> */}
			<section className='score__panel w-full '>
				<ScorePanelPointComponent
					title='You'
					score={gameState.score.you}
				/>
				<h2 className='text-5xl'>VS</h2>
				<ScorePanelPointComponent
					title='House'
					score={gameState.score.house}
				/>
			</section>
		</>
	);
};
