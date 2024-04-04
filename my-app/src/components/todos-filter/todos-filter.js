import { useContext } from 'react';
import { AppContext } from '../../context';
import styles from './todos-filter.module.css';

export const TodosFilter = () => {
	const { onFilterTodo } = useContext(AppContext);

	return (
		<div className={styles.buttonDivFilter}>
			<button className={styles.buttonFilter} onClick={onFilterTodo}>
				фильтр А-Я
			</button>
		</div>
	);
};
