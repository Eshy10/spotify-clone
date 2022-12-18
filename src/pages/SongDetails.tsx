import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
} from '../redux/services/shazamCore';
import { Song } from '../redux/services/types/song';

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid, id: artistId } = useParams() as {
		songid: string;
		id: string;
	};
	const { activeSong, isPlaying } = useSelector(
		(state: RootState) => state.players
	);

	const {
		data,
		isFetching: isFetchinRelatedSongs,
		error,
	} = useGetSongRelatedQuery({ songid });
	const { data: songData, isFetching: isFetchingSongDetails } =
		useGetSongDetailsQuery({ songid });

	if (isFetchingSongDetails && isFetchinRelatedSongs)
		return <Loader title="Searching song details" />;

	if (error != null) return <Error />;

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song: Song, i: number) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className="flex flex-col">
			{songData !== undefined && (
				<DetailsHeader artistId={artistId} songData={songData} />
			)}

			<div className="mb-10">
				<h2 className="text-white text-3xl font-bold">Lyrics:</h2>

				<div className="mt-5">
					{songData?.sections[1].type === 'LYRICS' ? (
						songData?.sections[1]?.text.map((line: string, i: number) => (
							<p
								key={`lyrics-${line}-${i}`}
								className="text-gray-400 text-base my-1"
							>
								{line}
							</p>
						))
					) : (
						<p className="text-gray-400 text-base my-1">
							Sorry, No lyrics found!
						</p>
					)}
				</div>
			</div>

			<RelatedSongs
				data={data}
				artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
				handlePauseClick={handlePauseClick}
				handlePlayClick={handlePlayClick}
			/>
		</div>
	);
};

export default SongDetails;
