import React, { FC } from 'react';

import Button from '@/ui/button';
import CartEmpty from '@/ui/cart-empty';
import ProductCart from '@/ui/product-cart';
import { DrawerType } from '@/components/drawer/drawer.type';

import { useDeleteCartItemMutation, useGetCartItemsQuery } from '@/redux/slice/home';
import { message } from 'antd';
import { useRouter } from 'next/router'
import { calculateTotalPrice } from '@/utils'


const DrawerCart: FC<DrawerType> = ({ opened, onClose }) => {
	const { data: cart, isError, isLoading  } = useGetCartItemsQuery();
	const [deleteCartItem] = useDeleteCartItemMutation();
	const resultPrice = calculateTotalPrice(cart);
	const router = useRouter()

	const cartDeleteItem = async (id) => {
		try {
			await deleteCartItem(id);
			message.success('Вы успешно удалили товар из корзины');
		} catch (err) {
			message.error('Ошибка при удалении элемента');
			console.error('Ошибка при удалении элемента:', err);
		}
	};



	return (
		<div
			style={{ zIndex: '1' }}
			className={`fixed top-0 right-0 h-full w-96 bg-white shadow-md transition-transform duration-300 ease-out transform ${
				opened ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<div className="p-4 flex flex-col">
				<div className="flex items-center justify-between">
					<h4 className="text-2xl font-bold">Корзина</h4>
					<img
						onClick={onClose}
						className="cursor-pointer"
						width={15}
						height={15}
						src="/img/close-icon.svg"
					/>
				</div>
				{cart?.length === 0 ? (
					<CartEmpty
						onClose={onClose}
						buttonName={'Вернуться назад'}
						img={'img/cart-empty.svg'}
						name={'Корзина пустая'}
						text={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
					/>
				) : (
					cart?.map((sneaker) => (
							<ProductCart deleteCartItem={cartDeleteItem} key={sneaker.id} {...sneaker} />
					))
				)}
			</div>
		</div>
	);
};

export default DrawerCart;
