interface IProps {
	title: string;
	score: number;
}
export const ScorePanelPointComponent = ({ title, score }: IProps) => {
	return (
		<>
			<div className='score__panel-points'>
				<p className='score__panel-points-p'>{title} Score</p>
				<span className='score__panel-points-span'>{score}</span>
			</div>
		</>
	);
};
