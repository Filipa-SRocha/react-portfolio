import styles from './Tag.module.css';

const Tag = ({ text, type }) => {
	const classe = type === 'tag' ? `${styles.tag}` : `${styles.language}`;
	return (
		<div className={classe}>
			<p>{text}</p>
		</div>
	);
};
export default Tag;
