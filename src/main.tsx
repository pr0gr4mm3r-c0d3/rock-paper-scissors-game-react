import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameProvider } from './context/game/GameProvider';
import { PieceProvider } from './context/piece/PieceProvider';
import { AppRouter } from './routers/AppRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GameProvider>
			<PieceProvider>
				<Router>
					<AppRouter />
				</Router>
			</PieceProvider>
		</GameProvider>
	</React.StrictMode>
);
