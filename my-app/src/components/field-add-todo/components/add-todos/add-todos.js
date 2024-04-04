import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const AddTodos = () => {
	const { messageTodo, onClickAddTodoList } = useContext(AppContext);

	return (
		<button
			disabled={messageTodo === '' || messageTodo === undefined}
			onClick={onClickAddTodoList}
		>
			Добавить задачу
		</button>
	);
};
