import { useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './update-todo.module.css';

export const OnUpdateTodo = ({ id }) => {
	const { onRequestUpdateTodoList } = useContext(AppContext);

	return (
		<>
			<button
				className={styles.button}
				onClick={(e) => onRequestUpdateTodoList(e, id)}
			>
				✎...
			</button>
		</>
	);
};
