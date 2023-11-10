import React from 'react';
import ProductCard from '@/ui/product-card'

function DrawerCart({ opened, onClose }:any) {
	return (
		<div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-md transition-transform duration-300 ease-out transform ${opened ? 'translate-x-0' : 'translate-x-full'}`}>
			<div className="p-4">
				<div className='flex items-center justify-between' >
					<h4 className="text-2xl font-bold ">Корзина</h4>
				<img onClick={onClose} className='cursor-pointer' width={15} height={15} src='/img/close-icon.svg' />
				</div>
				<ProductCard />
			</div>
		</div>
	);
}

export default DrawerCart;
