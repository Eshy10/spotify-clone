/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { worldChart } from './types';

// Define a service using a base URL and expected endpoints
export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				'20bbbff45amshd4c16bc52c0495ap17abedjsndd1eca674694'
			);

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query<worldChart[], void>({
			query: () => '/charts/world',
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopChartsQuery } = shazamCoreApi;
