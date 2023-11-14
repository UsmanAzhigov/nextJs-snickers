import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const homeApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'https://6340472ae44b83bc73cd517a.mockapi.io' }),
	endpoints: (builder) => ({
		getItems: builder.query({
			query: () => 'items'
		}),
		getCartItems: builder.query({
			query: () => 'cart'
		}),
		createCartOrder: builder.mutation({
			query: (newItem) => ({
				url: 'cart',
				method: 'POST',
				body: newItem
			})
		}),
		deleteCartItem: builder.mutation({
			query: (itemId) => ({
				url: `cart/${itemId}`,
				method: 'DELETE'
			})

		})
	})
})
export const { useGetItemsQuery, useGetCartItemsQuery, usePostCartItemsMutation, useDeleteCartItemMutation } = homeApi