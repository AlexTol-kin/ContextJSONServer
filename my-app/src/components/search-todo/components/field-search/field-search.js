import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const FieldSearch = () => {
	const { fieldSearch, setFieldSearch } = useContext(AppContext);

	return (
		<input
			type="text"
			placeholder="Поиск задачи"
			onChange={(e) => setFieldSearch(e.target.value)}
			value={fieldSearch}
		/>
	);
};
