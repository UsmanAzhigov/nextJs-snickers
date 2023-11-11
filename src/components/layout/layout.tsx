import Header from '@/components/header'
import { LayoutType } from '@/components/layout/layout'

function  Layout ({ children }:LayoutType)  {

	const menuItems = [
		{
			text: '0 руб.',
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
	return (
		<div className='bg-white rounded-[20px] shadow'>
			<Header menuItems={menuItems}/>
			<hr />
			<main className='p-10'>{children}</main>
		</div>
	)
}
export default Layout;
