/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { WorldChart, TracksList, Artist, Song } from './types';

// Define a service using a base URL and expected endpoints
export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
			);

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query<WorldChart[], void>({
			query: () => 'v1/charts/world',
		}),
		getSongsByGenre: builder.query<WorldChart[], string>({
			query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
		}),
		getSongsByCountry: builder.query<WorldChart[], string>({
			query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
		}),
		getSongsBySearch: builder.query<TracksList, string>({
			query: (searchTerm) =>
				`v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
		}),
		getArtistDetails: builder.query<Artist, string>({
			query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
		}),
		getSongDetails: builder.query<Song, { songid: string }>({
			query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
		}),
		getSongRelated: builder.query<WorldChart[], { songid: string }>({
			query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
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
