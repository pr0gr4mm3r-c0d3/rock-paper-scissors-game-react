import { Link } from 'react-router-dom';
import logoApp from 'src/assets/logos/logo.svg';

export const MainView = () => {
	const links = [
		{ label: 'New Game', to: '/create' },
		{ label: 'About', to: '/config' },
	];
	return (
		<>
			<img src={logoApp} alt='Logo App Rock - Paper - Scissors' />
			<ul className='home__main-ul my-5 text-2xl'>
				{links.map(({ label, to }) => (
					<Link className='home__main-li' to={to} key={label}>
						{label}
					</Link>
				))}
			</ul>
		</>
	);
};
