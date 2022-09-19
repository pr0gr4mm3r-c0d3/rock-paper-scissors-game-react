import { Routes, Route } from 'react-router-dom';
import AppRoot from '../AppRoot';
import { NoMatch } from '../views/NoMatch';
import { OriginGameRouter } from './OriginGameRouter';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/'>
				<Route index element={<AppRoot />} />
				<Route path='/game' element={<OriginGameRouter />} />

				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	);
};
