import styles from './Avatar.module.css';

const Avatar = ({ url }) => {
	return (
		<div className={styles.avatarContainer}>
			<img className={styles.avatarImg} src={url} alt='Foto User' />
		</div>
	);
};
export default Avatar;
