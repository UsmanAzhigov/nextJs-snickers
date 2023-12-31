import React from 'react';
import Product from '@/ui/product/product'
import { useRouter } from 'next/router'
import { useGetCartItemsQuery } from '@/redux/slice/home'
function UserProfile() {
	const {data:cart} = useGetCartItemsQuery()
	const router  = useRouter()

	const onBackPage =()=> {
		router.push('/')
	}
	return (
		<div className='flex flex-col gap-10'>
			<div className='flex items-center gap-4'>
				<img onClick={onBackPage} className='cursor-pointer' src='img/back-page.svg' />
				<h1 className='text-black text-[32px] font-bold '>Мои покупки</h1>
			</div>
			<div className='flex'>
				{cart?.map((sneaker) => (
					<Product
						key={sneaker.id}
						{...sneaker}
					/>
				))}
			</div>
		</div>
	)
}
export default UserProfile