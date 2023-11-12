import React from 'react';
import Product from '@/ui/product/product'
import { useRouter } from 'next/router'
import { useGetCartItemsQuery } from '@/redux/slice/home'
import Link from 'next/link'

 function FavoriteCard() {
	const router  = useRouter()
  const {data: cart} = useGetCartItemsQuery()

	 return (
		 <div className='flex flex-col gap-10'>
			 <div className='flex items-center gap-4'>
				 <Link href='/'>
					 <img  className='cursor-pointer' src='img/back-page.svg' />
				 </Link>
				 <h1 className='text-black text-[32px] font-bold '>Мои закладки</h1>
			 </div>
			 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginLeft: 50 }}>
				 {cart?.map((sneaker) => {
					 return <Product
						 key={sneaker.id}
						 {...sneaker}
					 />
				 })}
			 </div>
		 </div>
	 )
}
export default FavoriteCard