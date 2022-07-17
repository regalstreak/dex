import { useEffect, useRef, useState } from 'react';


const result = parser.fromSrt(srt);

const getDurationForLine = (srtObject: typeof result[0]) => {
	const { startTime, endTime } = srtObject;

	return parseTimestamp(endTime) - parseTimestamp(startTime);
};

const useSRT = (isPlaying = true) => {
	const [srtText, setSrtText] = useState<string>(result[0].text);

	const srtMeta = useRef({
		index: 0,
		duration: getDurationForLine(result[0]),
	});

	const currIntervalId = useRef(null);

	const updateSRTOnInterval = () => {
		const { index, duration } = srtMeta.current;

		const updateSRT = () => {
			if (index >= result.length) {
				return;
			}

			const newIndex = index + 1;
			const newDuration = getDurationForLine(result[newIndex]);

			setSrtText(result[newIndex].text);

			srtMeta.current = {
				index: newIndex,
				duration: newDuration,
			};
		};

		const intervalId = setTimeout(updateSRT, duration);
		currIntervalId.current = intervalId;

		return () => {
			clearTimeout(intervalId);
		};
	};

	useEffect(updateSRTOnInterval, [srtText]);

	useEffect(() => {
		if (!isPlaying) {
			clearTimeout(currIntervalId.current);
		}
	}, [isPlaying]);

	console.log(srtText);

	return srt;
};

export default useSRT;
