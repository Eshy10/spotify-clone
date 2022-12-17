import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
	const { id: artistId } = useParams() as { id: string };
	const { activeSong, isPlaying } = useSelector(
		(state: RootState) => state.players
	);
	const {
		data: artistData,
		isFetching: isFetchingArtistDetails,
		error,
	} = useGetArtistDetailsQuery(artistId);

	if (isFetchingArtistDetails)
		return <Loader title="Loading artist details..." />;

	if (error != null) return <Error />;

	return (
		<div className="flex flex-col">
			{artistData?.data.map((artist, i) => (
				<DetailsHeader artistId={artistId} artistData={artist} key={i} />
			))}

			<RelatedSongs
				data={artistData?.data}
				artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
			/>
		</div>
	);
};

export default ArtistDetails;
