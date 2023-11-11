import React, { useState } from 'react';
import Link from 'next/link';
import DrawerCart from '@/components/drawer/drawer';

export default function Header({ menuItems }: any) {
	const [isCartOpen, setIsCartOpen] = useState(false);

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
				{menuItems.map((item: { className: string | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; icon: string | undefined; }, index: React.Key | null | undefined) => (
					<li key={index} className={item.className}>
						{item.text === '0 руб.' ? (
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
