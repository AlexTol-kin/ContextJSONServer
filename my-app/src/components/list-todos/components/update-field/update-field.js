import { useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './update-field.module.css';

export const UpdateField = () => {
	const { getUpdateTodo, setGetUpdateTodo } = useContext(AppContext);

	return (
		<input
			className={styles.formInput}
			type="text"
			onChange={(e) => setGetUpdateTodo(e.target.value)}
			value={getUpdateTodo || ''}
			autoFocus
		/>
	);
};
