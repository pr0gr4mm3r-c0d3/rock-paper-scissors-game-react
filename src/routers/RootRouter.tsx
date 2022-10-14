import { Routes, Route } from 'react-router-dom';
import { NoMatch } from '../views/NoMatch';
import App from '../views/OriginApp/OriginApp';
import { AppRouter } from './AppRouter';

export const RootRouter = () => {
	return (
		<Routes>
			<Route path='/*' element={<AppRouter />} />
			<Route path='/game' element={<App />} />
			{/* <Route path='/new_game' element={<App />} /> */}

			<Route path='*' element={<NoMatch />} />
		</Routes>
	);
};
