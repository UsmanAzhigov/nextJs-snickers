import React, { FC } from 'react'
import ContentLoader from 'react-content-loader';

import 'tailwindcss/tailwind.css'
import { ProductType } from '@/ui/product/product.type'

const  Product:FC<ProductType> =
	({isFavorite,
		 isItemAdded,
		 onFavoriteClick,
		 onItemAddedClick,
		 nickname,
		 price,
image,
		 id}) => {
	const loading = false

	return (
		<div key={id} className={`border border-gray-300 p-8 w-56  rounded-[40px]  mr-8 mb-8 transition-transform transition-shadow
                    ${loading ? 'hover:shadow-none' : 'hover:shadow-lg transform hover:translate-y-[-5px]'}`}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={155}
					height={250}
					viewBox="0 0 155 265"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
					<rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
					<rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
					<rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
					<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
				</ContentLoader>
			) : (
				<>
					<img onClick={onFavoriteClick} className='cursor-pointer absolute' src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Unliked" />
					<img src={image} />
					<h5 className='text-black text-sm my-4'>{nickname}</h5>
					<div className="flex  justify-between align-center ">
						<div className="flex flex-col">
							<span className=' text-stone-300 text-[11px] font-medium r uppercase'>Цена:</span>
							<b className='text-sm'>{price}руб. </b>
						</div>
							<img
								onClick={onItemAddedClick}
								className='cursor-pointer '
								src={isItemAdded ? 'img/btn-checked.svg' : 'img/btn-unchecked.svg'}
								alt="Plus"
							/>
					</div>
				</>
			)}
		</div>
	);
}

export default Product;