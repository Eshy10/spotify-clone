import React, { useRef, useEffect } from 'react';

interface PlayerProps {
	artistId: string;
	isPlaying: boolean;
	activeSong: any;
	repeat: boolean;
	seekTime: any;
	volume: any;
	onEnded: () => void;
	onLoadedData: () => void;
	onTimeUpdate: () => void;
}

const Player = ({
	activeSong,
	isPlaying,
	volume,
	seekTime,
	onEnded,
	onTimeUpdate,
	onLoadedData,
	repeat,
}: PlayerProps) => {
	const ref = useRef(null);
	// eslint-disable-next-line no-unused-expressions
	if (ref.current !== undefined) {
		if (isPlaying) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	}

	useEffect(() => {
		ref.current.volume = volume;
	}, [volume]);
	// updates audio element only on seekTime change (and not on each rerender):
	useEffect(() => {
		ref.current.currentTime = seekTime;
	}, [seekTime]);

	return (
		<audio
			src={activeSong?.hub?.actions[1]?.uri}
			ref={ref}
			loop={repeat}
			onEnded={onEnded}
			onTimeUpdate={onTimeUpdate}
			onLoadedData={onLoadedData}
		/>
	);
};

export default Player;
