import SongBar from './SongBar';
import { Song } from '../redux/services/types/song';

interface RelatedSongsProps {
	data: any;
	artistId: string;
	isPlaying: boolean;
	activeSong: any;
	song?: any;
	handlePauseClick?: any;
	handlePlayClick?: any;
}

const RelatedSongs = ({
	data,
	artistId,
	isPlaying,
	activeSong,
	handlePauseClick,
	handlePlayClick,
}: RelatedSongsProps) => (
	<div className="flex flex-col">
		<h1 className="font-bold text-3xl text-white">Related Songs:</h1>

		<div className="mt-6 w-full flex flex-col">
			{data?.map((song: Song, i: number) => (
				<SongBar
					key={`${artistId}-${song.key}-${i}`}
					song={song}
					i={i}
					artistId={artistId}
					isPlaying={isPlaying}
					activeSong={activeSong}
					handlePauseClick={handlePauseClick}
					handlePlayClick={handlePlayClick}
				/>
			))}
		</div>
	</div>
);

export default RelatedSongs;
