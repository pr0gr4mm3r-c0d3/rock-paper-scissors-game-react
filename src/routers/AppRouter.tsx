import { Routes, Route } from 'react-router-dom';
import { MainView } from '../views/main/MainView';
import { CreateGameView } from '../views/createGame/CreateGameView';
import { Fade } from 'react-awesome-reveal';
import 'src/styles/App.scss';
import './home.scss';
import { NoMatch } from '../views/NoMatch';

export const AppRouter = () => {
	return (
		<>
			<Fade delay={300} duration={1500}>
				<section id='wrapper'>
					<div className='home__main-container'>
						<Routes>
							<Route path='/'>
								<Route index element={<MainView />} />
								<Route
									path='create'
									element={<CreateGameView />}
								/>
							</Route>
							<Route path='*' element={<NoMatch />} />
						</Routes>
					</div>
				</section>
			</Fade>
		</>
	);
};
