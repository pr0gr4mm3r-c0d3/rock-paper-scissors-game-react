import { useGame } from '../hooks/useGame';
import imgLogo from '../assets/logos/logo.svg';
export const ScoreComponent = () => {
	const { gameState } = useGame();

	return (
		<>
			<section className='score__panel w-full '>
				<img
					className='score__panel-img'
					src={imgLogo}
					alt='Logo App'
				/>

				<div className='score__panel-points'>
					<p className='score__panel-points-p'>Score</p>
					<span className='score__panel-points-span'>
						{gameState.score}
					</span>
				</div>
			</section>
		</>
	);
};
