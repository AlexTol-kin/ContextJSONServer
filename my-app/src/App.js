import styles from './app.module.css';
import { useState } from 'react';
import { AppContext } from './context';
import {
	useAddTodoList,
	useDeleteTodoList,
	useFilterTodoList,
	useGetTodoList,
	useSearchTodoList,
	useUpdateTodoList,
} from './hooks';
import { FieldAddTodo, ListTodos, SearchTodo, TodosFilter } from './components';

export const App = () => {
	const [refresTodoFlag, setRefreshTodoFlag] = useState(false);
	const refreshProducts = () => setRefreshTodoFlag(!refresTodoFlag);
	const [messageTodo, setMessageTodo] = useState();
	const [fieldSearch, setFieldSearch] = useState('');

	const { newTodoList } = useGetTodoList(refresTodoFlag);

	const { onClickAddTodoList } = useAddTodoList(messageTodo);

	const { onRequestUpdateTodoList, getUpdateTodo, setGetUpdateTodo } =
		useUpdateTodoList(refreshProducts, refresTodoFlag);

	const { onDeleteTodo } = useDeleteTodoList();

	const { onFilterTodo, filtrTodoList, filterFlag } = useFilterTodoList(newTodoList);

	const { searchFlag, onSearchTodoList, fieidTodo } = useSearchTodoList(
		newTodoList,
		fieldSearch,
		setFieldSearch,
	);

	return (
		<AppContext.Provider
			value={{
				messageTodo,
				setMessageTodo,
				onClickAddTodoList,
				refresTodoFlag,
				setGetUpdateTodo,
				getUpdateTodo,
				filterFlag,
				newTodoList,
				filtrTodoList,
				onRequestUpdateTodoList,
				onDeleteTodo,
				onFilterTodo,
				onSearchTodoList,
				setFieldSearch,
				fieldSearch,
				searchFlag,
				fieidTodo,
			}}
		>
			<div className={styles.container}>
				<h1 className={styles.headingTitle}>To-Do List</h1>
				<form className={styles.form}>
					<FieldAddTodo />
					<ListTodos />
					<TodosFilter />
					<SearchTodo />
				</form>
			</div>
		</AppContext.Provider>
	);
};
