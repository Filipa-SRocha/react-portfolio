import Tag from './Tag';

import styles from './RepositorioHeader.module.css';

const RepositorioHeader = ({ name, language }) => {
	let nameArray = name.split('-');
	nameArray = nameArray.map((word) =>
		word.replace(word[0], word[0].toUpperCase())
	);
	const newName = nameArray.join(' ');

	return (
		<div className={styles.repositorioHeader}>
			<h2 className={styles.title}>{newName}</h2>
			{language && <Tag text={language} />}
		</div>
	);
};
export default RepositorioHeader;
