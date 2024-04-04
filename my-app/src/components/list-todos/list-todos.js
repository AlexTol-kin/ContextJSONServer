import { useContext } from 'react';
import { AppContext } from '../../context';
import { OnRemoveTodo, OnUpdateTodo, UpdateField } from './components';
import styles from './list-todos.module.css';

export const ListTodos = () => {
	const { refresTodoFlag, filterFlag, newTodoList, filtrTodoList } =
		useContext(AppContext);

	return (
		<>
			{refresTodoFlag ? <UpdateField /> : false}
			{(!filterFlag ? newTodoList : filtrTodoList).map(({ id, todo }) => (
				<li key={id} className={styles.toDoList}>
					<OnUpdateTodo id={id} />
					{todo}
					<OnRemoveTodo id={id} />
				</li>
			))}
		</>
	);
};
