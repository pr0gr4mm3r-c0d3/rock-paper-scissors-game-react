import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PieceProvider } from './context/piece/PieceProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<PieceProvider>
			<App />
		</PieceProvider>
	</React.StrictMode>
);
