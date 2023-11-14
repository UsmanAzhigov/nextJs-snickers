import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from '@/redux/slice/home'

const store = configureStore({
	reducer: {
		[homeApi.reducerPath]: homeApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(homeApi.middleware)
})

export default store
