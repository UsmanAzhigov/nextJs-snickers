import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Product from '@/ui/product/product'
import SearchBar from '@/ui/search-bar/search-bar'
import { useCreateCartOrderMutation, useGetItemsQuery } from '@/redux/slice/home'
import { message } from 'antd'

function Home() {
	const { data: items } = useGetItemsQuery()
	const [createCartOrder] = useCreateCartOrderMutation()

	const [sneakers, setSneakers] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const filteredSneakers = sneakers.filter((sneaker) =>
		sneaker.nickname.toLowerCase().includes(searchValue.toLowerCase())
	)

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const onProductToggle = async (productId, property, newItem) => {
		try {
			setSneakers((prevSneakers) =>
				prevSneakers.map((sneaker) =>
					sneaker.id === productId ? { ...sneaker, [property]: !sneaker[property] } : sneaker
				)
			)
			await createCartOrder(newItem)
			message.success('Вы успешно добавили товар в корзину')
		} catch (err) {
			message.error('Не получилось добавить товар в корзину')
		}
	}


	useEffect(() => {
		const fetchSneakers = async () => {
			try {
				setSneakers(
					items.map((sneaker) => ({ ...sneaker, isFavorite: false, isItemAdded: false }))
				)
			} catch (error) {
				console.error('Запрос на получение не сработал:', error)
			}
		}

		fetchSneakers()
	}, [items])

	return (
		<div className='flex justify-center flex-col gap-10'>
			<Image width={1260} height={300} src='/banner.png' alt='banner' />
			<div className='flex items-center justify-between'>
				<h1 className='text-black text-[32px] font-bold'>Все кроссовки</h1>
				<SearchBar searchValue={searchValue} onChange={onSearchChange} />
			</div>
			<div className='flex gap-10'>
				{filteredSneakers.map((sneaker) => (
					<Product
						key={sneaker.id}
						{...sneaker}
						onFavoriteClick={() => onProductToggle(sneaker.id, 'isFavorite', {
							...sneaker,
							isFavorite: !sneaker.isFavorite
						})}
						onItemAddedClick={() => onProductToggle(sneaker.id, 'isItemAdded', {
							...sneaker,
							isItemAdded: !sneaker.isItemAdded
						})}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
