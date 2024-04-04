import { useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './text-field.module.css';

export const TextField = () => {
	const { messageTodo, setMessageTodo } = useContext(AppContext);

	return (
		<input
			className={styles.formInput}
			type="text"
			placeholder="Опишите задачу"
			value={messageTodo || ''}
			onChange={(e) => setMessageTodo(e.target.value)}
		/>
	);
};
