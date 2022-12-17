import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

interface SongBarProps {
	isPlaying: boolean;
	activeSong: any;
	song: any;
	handlePause: () => void;
	handlePlay: () => void;
}

const PlayPause = ({
	song,
	isPlaying,
	activeSong,
	handlePause,
	handlePlay,
}: SongBarProps) =>
	isPlaying && activeSong?.title === song.title ? (
		<FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
	) : (
		<FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
	);

export default PlayPause;
