import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GameProvider } from './context/game/GameProvider';
import { PieceProvider } from './context/piece/PieceProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GameProvider>
			<PieceProvider>
				<App />
			</PieceProvider>
		</GameProvider>
	</React.StrictMode>
);
