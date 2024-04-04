import { useContext } from 'react';
import { AppContext } from '../../../../context';
import styles from './remove-todo.module.css';

export const OnRemoveTodo = ({ id }) => {
	const { onDeleteTodo } = useContext(AppContext);

	return (
		<>
			<button className={styles.buttonDelete} onClick={(e) => onDeleteTodo(e, id)}>
				❌
			</button>
		</>
	);
};
