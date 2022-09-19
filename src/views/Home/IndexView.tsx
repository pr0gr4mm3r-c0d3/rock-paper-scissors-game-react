import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoApp from 'src/assets/logos/logo.svg';
import { useGame } from 'src/hooks/useGame';
import { usePieces } from 'src/hooks/usePieces';

import './home.scss';

export const IndexView = () => {
	const { handlerResetScore } = useGame();
	const { handlerPlayAgain } = usePieces();
	useEffect(() => {
		handlerResetScore();
		handlerPlayAgain();
		console.log('Reset Score');
	}, []);

	return (
		<>
			<section id='wrapper'>
				<div className='home__main-container'>
					<img src={logoApp} alt='Logo App Rock - Paper - Scissors' />
					<ul className='home__main-ul my-5 text-2xl'>
						<Link className='home__main-li' to={'/game'}>
							Play Game
						</Link>
						{/* <Link className='home__main-li' to={'/config'}>
							Config
						</Link> */}
					</ul>
				</div>
			</section>
		</>
	);
};
