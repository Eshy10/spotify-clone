import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { WorldChart } from '../redux/services/types/world';

interface SongCardProps {
	song: WorldChart;
	isPlaying: boolean;
	activeSong: WorldChart;
	data: any;
	i: number;
}

const SongCard = ({ song, isPlaying, activeSong, data, i }: SongCardProps) => {
	const dispatch = useDispatch();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
			<div className="relative w-full h-56 group">
				<div
					className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
						activeSong?.title === song.title
							? 'flex bg-black bg-opacity-70'
							: 'hidden'
					}`}
				>
					<PlayPause
						isPlaying={isPlaying}
						activeSong={activeSong}
						song={song}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
					/>
				</div>
				<img
					alt="song_img"
					src={
						song?.images !== undefined
							? song.images?.coverart
							: 'https://via.placeholder.com/400/000000/FFFFFF?Text=image'
					}
					className="w-full h-full rounded-lg"
				/>
			</div>

			<div className="mt-4 flex flex-col">
				<p className="font-semibold text-lg text-white truncate">
					<Link to={`/songs/${song?.key}`}>{song.title}</Link>
				</p>
				<p className="text-sm truncate text-gray-300 mt-1">
					{song !== undefined && (
						<Link
							to={
								song?.artists?.length > 0
									? `/artists/${song?.artists[0]?.adamid}`
									: '/top-artists'
							}
						>
							{song.subtitle}
						</Link>
					)}
				</p>
			</div>
		</div>
	);
};

export default SongCard;
