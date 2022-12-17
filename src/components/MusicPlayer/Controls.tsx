import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import {
	BsArrowRepeat,
	BsFillPauseFill,
	BsFillPlayFill,
	BsShuffle,
} from 'react-icons/bs';

interface ControlProps {
	isPlaying: boolean;
	activeSong?: any;
	isActive?: boolean;
	repeat: boolean;
	shuffle: boolean;
	currentSongs: any;
	setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
	handlePlayPause: () => void;
	handlePrevSong: () => void;
	handleNextSong: () => void;
	setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls = ({
	isPlaying,
	repeat,
	setRepeat,
	shuffle,
	setShuffle,
	currentSongs,
	handlePlayPause,
	handlePrevSong,
	handleNextSong,
}: ControlProps) => {
	return (
		<div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
			<BsArrowRepeat
				size={20}
				color={repeat ? 'red' : 'white'}
				onClick={() => setRepeat((prev) => !prev)}
				className="hidden sm:block cursor-pointer"
			/>
			{currentSongs !== '' && (
				<MdSkipPrevious
					size={30}
					color="#FFF"
					className="cursor-pointer"
					onClick={handlePrevSong}
				/>
			)}
			{isPlaying ? (
				<BsFillPauseFill
					size={45}
					color="#FFF"
					onClick={handlePlayPause}
					className="cursor-pointer"
				/>
			) : (
				<BsFillPlayFill
					size={45}
					color="#FFF"
					onClick={handlePlayPause}
					className="cursor-pointer"
				/>
			)}
			{currentSongs !== '' && (
				<MdSkipNext
					size={30}
					color="#FFF"
					className="cursor-pointer"
					onClick={handleNextSong}
				/>
			)}
			<BsShuffle
				size={20}
				color={shuffle ? 'red' : 'white'}
				onClick={() => setShuffle((prev) => !prev)}
				className="hidden sm:block cursor-pointer"
			/>
		</div>
	);
};

export default Controls;
