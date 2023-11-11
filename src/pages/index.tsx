import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Product from '@/ui/product/product';
import SearchBar from '@/ui/search-bar/search-bar';
import axios from 'axios';

function Home() {
	const [searchValue, setSearchValue] = useState('');
	const [sneakers, setSneakers] = useState([]);

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		const fetchSneakers = async () => {
			try {
				const { data } = await axios.get('https://6340472ae44b83bc73cd517a.mockapi.io/items');
				setSneakers(data.map((sneaker) => ({ ...sneaker, isFavorite: false, isItemAdded: false })));
			} catch (error) {
				console.error('Запрос на получение не сработал:', error);
			}
		};

		fetchSneakers();
	}, []);

	const onProductToggle = (productId, property) => {
		setSneakers((prevSneakers) =>
			prevSneakers.map((sneaker) =>
				sneaker.id === productId ? { ...sneaker, [property]: !sneaker[property] } : sneaker
			)
		);
	};

	return (
		<div className='flex justify-center flex-col gap-10'>
			<Image width={1260} height={300} src='/banner.png' alt='banner' />
			<div className='flex items-center justify-between'>
				<h1 className='text-black text-[32px] font-bold'>Все кроссовки</h1>
				<SearchBar searchValue={searchValue} onChange={onSearchChange} />
			</div>
			<div className='flex  gap-10'>
				{sneakers.map((sneaker) => (
					<Product
						key={sneaker.id}
						{...sneaker}
						onFavoriteClick={() => onProductToggle(sneaker.id, 'isFavorite')}
						onItemAddedClick={() => onProductToggle(sneaker.id, 'isItemAdded')}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
