import { SearchBarType } from '@/ui/search-bar/search-bar.type';
import { FC } from 'react';

const SearchBar: FC<SearchBarType> = ({ onChange, searchValue }) => {
	return (
		<input
			className='w-[250px] rounded-[10px]  p-3 pl-3 border border-zinc-100 placeholder:text-stone-300 text-sm '
			onChange={onChange}
			value={searchValue}
			placeholder="Поиск..."
		/>
	);
};

export default SearchBar;
