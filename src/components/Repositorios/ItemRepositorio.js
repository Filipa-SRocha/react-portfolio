import moment from 'moment';
import styles from './ItemRepositorio.module.css';
import RepositorioHeader from './RepositorioHeader';
import Tag from './Tag';

const ItemRepositorio = ({
	name,
	description,
	created,
	updated,
	language,
	tags,
	url,
}) => {
	moment.locale('pt-br');

	return (
		<a href={url}>
			<div className={styles.repositorioContainer}>
				<RepositorioHeader name={name} language={language} />

				<p className={styles.description}>{description}</p>

				<div className={styles.repositorioFooter}>
					<div className={styles.tags}>
						{tags && tags.map((tag) => <Tag text={tag} type='tag' />)}
					</div>
					<div>
						<small>Criado em: {moment(created).format('LL')}</small>
						<small>Último update: {moment(updated).format('LL')}</small>
					</div>
				</div>
			</div>
		</a>
	);
};
export default ItemRepositorio;
