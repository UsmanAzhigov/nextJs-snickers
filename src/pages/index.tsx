import Image from 'next/image';
import React, { useState } from 'react';

import Product from '@/ui/product';
import SearchBar from '@/ui/search-bar';

function Home() {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isItemAdded, setIsItemAdded] = useState(false);

	const onFavoriteClick = () => {
		setIsFavorite(!isFavorite);
	};

	const onItemAddedClick = () => {
		setIsItemAdded(!isItemAdded);
	};

	return (
		<div className='flex justify-center flex-col gap-10'>
			<Image width={1260} height={300} src='/banner.png' alt='banner' />
			<div className='flex items-center justify-between'>
				<h1 className='text-black text-[32px] font-bold ' >
					Все кроссовки
				</h1>
				<SearchBar />
			</div>
			<Product
				isFavorite={isFavorite}
				isItemAdded={isItemAdded}
				onFavoriteClick={onFavoriteClick}
				onItemAddedClick={onItemAddedClick}
			/>
		</div>
	);
}

export default Home;
