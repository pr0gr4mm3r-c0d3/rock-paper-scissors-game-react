import { Routes, Route } from 'react-router-dom';
import App from '../views/OriginApp/OriginApp';

export const OriginGameRouter = () => {
	return (
		<Routes>
			<Route index element={<App />} />
		</Routes>
	);
};
