export const ScoreComponent = () => {
	return (
		<>
			<section className='score__panel w-full '>
				<img
					className='score__panel-img'
					src='src/assets/logos/logo.svg'
					alt='Logo App'
				/>

				<div className='score__panel-points'>
					<p className='score__panel-points-p'>Score</p>
					<span className='score__panel-points-span'>12</span>
				</div>
			</section>
		</>
	);
};
