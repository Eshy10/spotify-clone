/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { WorldChart, TracksList, Artist, Song } from './types';

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
		getTopCharts: builder.query<WorldChart[], void>({
			query: () => '/charts/world',
		}),
		getSongsByGenre: builder.query<WorldChart[], string>({
			query: (genre) => `/charts/genre-world?genre_code=${genre}`,
		}),
		getSongsByCountry: builder.query<WorldChart[], string>({
			query: (countryCode) => `/charts/country?country_code=${countryCode}`,
		}),
		getSongsBySearch: builder.query<TracksList[], string>({
			query: (searchTerm) =>
				`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
		}),
		getArtistDetails: builder.query<Artist[], string>({
			query: (artistId) => `/artists/details?artist_id=${artistId}`,
		}),
		getSongDetails: builder.query<Song[], { songid: string }>({
			query: ({ songid }) => `/tracks/details?track_id=${songid}`,
		}),
		getSongRelated: builder.query<WorldChart[], { songid: string }>({
			query: ({ songid }) => `/tracks/related?track_id=${songid}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetTopChartsQuery,
	useGetArtistDetailsQuery,
	useGetSongDetailsQuery,
	useGetSongsByGenreQuery,
	useGetSongsByCountryQuery,
	useGetSongRelatedQuery,
	useGetSongsBySearchQuery,
} = shazamCoreApi;
