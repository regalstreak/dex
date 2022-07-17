import { Text, View } from 'react-native';
import srtParser from 'srt-parser-2';
import React, { useEffect } from 'react';
const parser = new srtParser();

const srt = `
1
00:00:00,000 --> 00:00:05,936 
The Pietà is a subject in Christian art depicting the Virgin Mary cradling the dead body of Jesus

2
00:00:05,936 --> 00:00:11,872 
after his body was removed from the cross. It is most often found in sculptures. The Pietà is

3
00:00:11,872 --> 00:00:17,808 
a specific form of the Lamentation of Christ in which Jesus is mourned by the Virgin Mary alone.

4
00:00:17,818 --> 00:00:21,550 
The statue of Bacchus was commissioned by the banker Jacopo Galli for his

5
00:00:21,550 --> 00:00:25,282 
garden and he wanted it fashioned after the models of the ancients.

6
00:00:25,282 --> 00:00:31,210 
The body of this drunken and staggering god gives an impression of both youthfulness and of femininity.

7
00:00:31,220 --> 00:00:35,492 
Moses is an imposing figure—nearly eight feet high sitting down!

8
00:00:35,492 --> 00:00:40,004 
He has massive muscular arms and an angry, intense look in his eyes.

9
00:00:40,004 --> 00:00:44,012 
Under his arms, he carries the tablets of the law—the stones inscribed with

10
00:00:44,012 --> 00:00:48,020 
the Ten Commandments that he has just received from God on Mt. Sinai.

`;

const result = parser.fromSrt(srt);

export function parseTimestamp(timestamp: string): number {
	const match = timestamp.match(
		/^(?:(\d{1,}):)?(\d{1,2}):(\d{1,2})[,.](\d{1,3})$/,
	);

	if (!match) {
		throw new Error('Invalid SRT or VTT time format: "' + timestamp + '"');
	}

	const hours = match[1] ? parseInt(match[1], 10) * 3600000 : 0;
	const minutes = parseInt(match[2], 10) * 60000;
	const seconds = parseInt(match[3], 10) * 1000;
	const milliseconds = parseInt(match[4], 10);

	return hours + minutes + seconds + milliseconds;
}

const SubTitle = ({ isPlaying, progress }) => {
	const [text, setText] = React.useState('');

	console.log(result);

	useEffect(() => {
		const current = result.find((item) => {
			return (
				parseTimestamp(item.startTime) <= progress * 1000 &&
				parseTimestamp(item.endTime) >= progress * 1000
			);
		}).text;

		setText(current);
	}, [progress]);
	return (
		<View
			style={{
				position: 'absolute',
				top: 24,
				width: '100%',
				marginHorizontal: 'auto',
				padding: 8,
			}}
		>
			<Text
				style={{
					color: 'white',
					zIndex: 999,
					textAlign: 'center',
					marginTop: 0,
					fontSize: 12,
				}}
			>
				{' '}
				{text}
			</Text>
		</View>
	);
};

export default SubTitle;
