import { useEffect } from 'react';
import TrackPlayer, {
	Event,
	State,
	usePlaybackState,
	useTrackPlayerEvents,
} from 'react-native-track-player';

const setUpTrackPlayer = async (url: string) => {
	console.log('\n THis rans naudodo\n');
	await TrackPlayer.reset();
	await TrackPlayer.setupPlayer();
	await TrackPlayer.add([{ url }]);
};

export const useTrackPlayer = (
	url: string,
	trackPlayer: typeof TrackPlayer,
) => {
	const playerState = usePlaybackState();

	useEffect(() => {
		if (!url) {
			return;
		}
		setUpTrackPlayer(url);
		return () => {
			TrackPlayer.reset();
		};
	}, [url]);

	useEffect(() => {
		return () => {
			TrackPlayer.destroy();
		};
	}, []);

	const isPlaying = playerState === State.Playing;
	const isReady = playerState !== State.None;

	useTrackPlayerEvents([Event.PlaybackQueueEnded], async () => {
		await TrackPlayer.reset();
		await TrackPlayer.add([{ url }]);
	});

	return {
		isReady,
		isPlaying,
		play: TrackPlayer.play,
		pause: TrackPlayer.pause,
	};
};
