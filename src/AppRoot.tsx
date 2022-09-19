import { Fade } from 'react-awesome-reveal';
import './styles/App.scss';
import { IndexView } from './views/Home/IndexView';

const AppRoot = () => {
	return (
		<>
			<Fade delay={300} duration={1500}>
				<IndexView />
			</Fade>
		</>
	);
};
export default AppRoot;
