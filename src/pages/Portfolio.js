import Avatar from '../components/Avatar/Avatar';
import Repositorios from '../components/Repositorios/Repositorios';
import Footer from '../components/Footer/Footer';

import styles from './Portfolio.module.css';

const Portfolio = ({ data }) => {
	return (
		<div>
			<header className={styles.header}>
				<Avatar url={data.avatar_url} />
				<div>
					<h1 className={styles.title}>{data.name}</h1>
					<p>{data.bio}</p>
					<small>{data.company}</small>
					<small>Based in: {data.location}</small>
				</div>
			</header>
			<Repositorios url={data.repos_url} />
			<Footer />
		</div>
	);
};
export default Portfolio;
