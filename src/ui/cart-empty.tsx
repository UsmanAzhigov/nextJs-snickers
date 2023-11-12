import Button from '@/ui/button'

const CartEmpty = ({buttonName,name,text,img,onClose}) => {
	return (
					<div className="w-[285px] h-80 top-[200px] left-10 relative">
						<Button buttonName={buttonName} onClick={onClose} />
						<div className="w-[285px] h-[225px] left-0 top-0 absolute flex justify-center">
							<div className="left-[57px] top-[141px] absolute text-black text-[22px] font-semibold ">{name}</div>
							<div className="w-[285px] left-0 top-[177px] fon absolute opacity-40 text-center text-black text-sm">{text}</div>
							<img className='mb-20' src={img} />
						</div>
					</div>
	);
};

export default CartEmpty;
