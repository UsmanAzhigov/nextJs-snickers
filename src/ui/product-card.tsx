import React from 'react';
import ContentLoader from 'react-content-loader';

import 'tailwindcss/tailwind.css'
import styles from './product.module.scss';

function ProductCard() {
	const loading = false

	return (
		<div className={`flex my-4 border border-gray-300 p-3 items-center   rounded-[40px]  mr-8 mb-8 transition-transform transition-shadow`}>
			<img className='mb-4' src='/img/snickers.svg' />
				<div className='flex  flex-col gap-2 ml-2'>
					<h5 className='"w-[150px] text-black text-sm font-normal'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<b className='text-sm'>12 999 руб.</b>
				</div>
			<img className='absolute cursor-pointer right-[80px] top-[160px] ' src='/img/delete.svg'  />
		</div>
	);
}

export default ProductCard;