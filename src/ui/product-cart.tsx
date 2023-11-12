import React from 'react';
import { useDeleteCartItemMutation } from '@/redux/slice/home'

function ProductCart({nickname,price, image, id,}) {
	const loading = false;
	const [deleteCartItem] = useDeleteCartItemMutation()


	return (
		<div key={id} className={`flex  my-4 border border-gray-300 p-3 items-center   rounded-[20px]  mr-8 mb-8 transition-transform transition-shadow`}>
			<img className='mb-4 ' width={70}  height={70} src={image} />
				<div className='flex  flex-col gap-2 ml-2'>
					<h5 className='"w-[150px] text-black text-sm font-normal'>{nickname}</h5>
					<b className='text-sm'>{price} руб.</b>
				</div>
			<img onClick={() => deleteCartItem(id)} className=' cursor-pointer mr-5  mt-10 ' src='/img/delete.svg'  />
		</div>
	);
}

export default ProductCart;