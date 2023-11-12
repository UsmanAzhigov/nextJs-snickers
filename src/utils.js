export const calculateTotalPrice = (cart) => {
	return cart?.reduce((total, item) => total + item.price, 0)?.toString();
};