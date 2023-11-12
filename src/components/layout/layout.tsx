import Header from '@/components/header'
import { LayoutType } from '@/components/layout/layout'

function  Layout ({ children }:LayoutType)  {

	return (
		<div className='bg-white rounded-[20px] shadow'>
			<Header />
			<hr />
			<main className='p-10'>{children}</main>
		</div>
	)
}
export default Layout;
