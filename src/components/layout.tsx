import Header from '@/components/header'

export default function Layout({ children }: any) {
	return (
		<div className='bg-white rounded-[20px] shadow'>
			<Header />
			<hr />
			<main className='p-10'>{children}</main>
		</div>
	)
}