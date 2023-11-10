import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { MantineProvider } from '@mantine/core'


function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MantineProvider>
	)
}

export default App
