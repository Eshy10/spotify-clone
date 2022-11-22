interface SongBarProps {
	isPlaying: boolean;
	activeSong: any;
	song: any;
	handlePause: () => void;
	handlePlay: (song: any, i: number) => void;
}

const PlayPause = ({
	song,
	isPlaying,
	activeSong,
	handlePause,
	handlePlay,
}: SongBarProps) => <div>Loader</div>;

export default PlayPause;
