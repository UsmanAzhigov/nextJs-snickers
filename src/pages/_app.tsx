import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/layout'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux';
import store from '../redux/store'

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default App
