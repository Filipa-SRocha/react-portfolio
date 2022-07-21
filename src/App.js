import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import Portfolio from './pages/Portfolio';

function App() {
	const [userData, setUserData] = useState();

	const setup = async () => {
		try {
			const { data } = await axios.get(
				'https://api.github.com/users/Filipa-SRocha'
			);
			setUserData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setup();
	}, []);

	return <>{userData ? <Portfolio data={userData} /> : <></>}</>;
}

export default App;
