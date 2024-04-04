import { useContext } from 'react';
import { AppContext } from '../../context';
import { FieldSearch } from './components';
import styles from './search-todo.module.css';

export const SearchTodo = () => {
	const { searchFlag, fieidTodo, onSearchTodoList } = useContext(AppContext);

	return (
		<div className={styles.buttonDivSearch}>
			<button onClick={onSearchTodoList}> 🔎</button>
			<FieldSearch />
			{!searchFlag ? <></> : <li>{fieidTodo}</li>}
		</div>
	);
};
