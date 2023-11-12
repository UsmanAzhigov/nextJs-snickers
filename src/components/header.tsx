import Link from 'next/link';
import React, { useState } from 'react';
import { calculateTotalPrice } from '@/utils'

import DrawerCart from '@/components/drawer/drawer';
import { useGetCartItemsQuery } from '@/redux/slice/home';

export default function Header() {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { data: cart } = useGetCartItemsQuery();
	const resultPrice = calculateTotalPrice(cart);
	const menuItems = [
		{
			text: `${resultPrice} руб.`,
			className: 'flex items-center gap-2 font-bold text-zinc-600 text-sm cursor-pointer hover:text-black',
			icon: '/img/cardMenu.svg',
		},
		{
			text: 'Закладки',
			className: ' flex items-center  gap-2  text-zinc-600 text-sm cursor-pointer hover:text-black',
			icon: '/img/favorite.svg',
		},
		{
			text: 'Профиль',
			className: 'flex items-center gap-2 text-gray-500 text-sm cursor-pointer hover:text-black',
			icon: '/img/user.svg',
		},
	];

	const openCartDrawer = () => {
		setIsCartOpen(true);
	};

	const closeCartDrawer = () => {
		setIsCartOpen(false);
	};

	return (
		<header className='bg-white flex justify-between items-center text p-10 rounded-e-3xl rounded-l-3xl '>
			<Link href='/' passHref>
				<div className='flex gap-3 cursor-pointer  '>
					<img src='img/logo.svg' alt='Лого' />
					<div>
						<h4 className='text-lg font-semibold uppercase'>REACT SNEAKERS</h4>
						<span className='text-neutral-400 text-sm'>Магазин лучших кроссовок</span>
					</div>
				</div>
			</Link>
			<ul className='flex gap-12'>
				{menuItems.map((item, index) => (
					<li key={index} className={item.className}>
						{item.icon === '/img/cardMenu.svg'  ? (
							<div onClick={openCartDrawer} className='flex items-center gap-2  text-zinc-600 text-sm cursor-pointer hover:text-black'>
								<img src={item.icon} />
								{item.text}
							</div>
						) : (
							<>
								{item.text === 'Закладки' ? (
									<Link href='/favorite-card' passHref>
										<div className='flex items-center gap-2 text-zinc-600 text-sm cursor-pointer hover:text-black'>
											<img src={item.icon} />
											{item.text}
										</div>
									</Link>
								) : (
									<>
										{item.text === 'Профиль' ? (
											<Link href='/user-profile' passHref>
												<div className='flex items-center gap-2 text-zinc-600 text-sm cursor-pointer hover:text-black'>
													<img src={item.icon} />
													{item.text}
												</div>
											</Link>
										) : (
											<>
												<img src={item.icon} />
												{item.text}
											</>
										)}
									</>
								)}
							</>
						)}
					</li>
				))}
			</ul>
			<DrawerCart opened={isCartOpen} onClose={closeCartDrawer} />
		</header>
	);
}
