import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';
import { WorldChart } from '../redux/services/types/world';

const Discover = () => {
	const dispatch = useDispatch();
	const { genreListId } = useSelector((state: RootState) => state.players);
	const { activeSong, isPlaying } = useSelector(
		(state: RootState) => state.players
	);
	const { data, isFetching, error } = useGetSongsByGenreQuery(
		genreListId.length > 0 ? genreListId : 'POP'
	);

	if (isFetching) return <Loader title="Loading songs..." />;

	if (error != null) return <Error />;

	const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

	return (
		<div className="flex flex-col">
			<div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
				<h2 className="font-bold text-3xl text-white text-left">
					Discover {genreTitle}
				</h2>

				<select
					onChange={(e) => dispatch(selectGenreListId(e.target.value))}
					value={genreListId.length > 0 ? genreListId : 'pop'}
					className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
				>
					{genres.map((genre) => (
						<option key={genre.value} value={genre.value}>
							{genre.title}
						</option>
					))}
				</select>
			</div>

			<div className="flex flex-wrap sm:justify-start justify-center gap-8">
				{data?.map((song: WorldChart, i: number) => (
					<SongCard
						key={song.key}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						data={data}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Discover;
