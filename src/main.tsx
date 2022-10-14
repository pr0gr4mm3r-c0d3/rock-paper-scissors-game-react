import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameProvider } from './context/game/GameProvider';
import { PieceProvider } from './context/piece/PieceProvider';
import { RootRouter } from './routers/RootRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GameProvider>
			<PieceProvider>
				<Router>
					<RootRouter />
				</Router>
			</PieceProvider>
		</GameProvider>
	</React.StrictMode>
);
