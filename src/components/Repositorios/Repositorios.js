import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemRepositorio from './ItemRepositorio';

import styles from './Repositorios.module.css';
const Repositorios = ({ url }) => {
	const [repositorios, setRepositorios] = useState();

	const setup = async () => {
		try {
			const { data } = await axios.get(url);
			setRepositorios(data);
		} catch (error) {
			console.log('Erro na conexão ao servidor', error);
		}
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<section className={styles.sectionContainer}>
			<h2>Repositórios</h2>
			<ul className={styles.repositoriosContainer}>
				{repositorios &&
					repositorios.map((repositorio) => (
						<ItemRepositorio
							key={repositorio.id}
							name={repositorio.name}
							description={repositorio.description}
							created={repositorio.created_at}
							updated={repositorio.updated_at}
							language={repositorio.language}
							tags={repositorio.topics}
							url={repositorio.html_url}
						/>
					))}
			</ul>
		</section>
	);
};
export default Repositorios;
