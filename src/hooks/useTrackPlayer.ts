import { useEffect } from 'react';
import TrackPlayer, {
	Event,
	State,
	usePlaybackState,
	useProgress,
	useTrackPlayerEvents,
} from 'react-native-track-player';

const setUpTrackPlayer = async (url: string) => {
	console.log('\n THis rans naudodo\n');
	await TrackPlayer.reset();
	await TrackPlayer.setupPlayer();
	await TrackPlayer.add([{ url }]);
};

export const useTrackPlayer = (url: string) => {
	const playerState = usePlaybackState();

	const progress = useProgress();

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
			TrackPlayer.pause();
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
		progress,
	};
};
