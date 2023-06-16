import React, { useEffect, useState } from 'react';
import {
	CartesianGrid,
	Legend,
	LineChart,
	Line,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import { useAlphaVantage } from '@/hooks/useAlphaVantage';

export default function App() {
	const [chartData, setChartData] = useState<Array<any>>([]);
	const [symbol, setSymbol] = useState('IBM');
	const alphaVantage = useAlphaVantage();

	useEffect(() => {
		(async () => {
			let newChartData: any[] = [];
			let avData = await alphaVantage.getTimeSeriesIntradayBySymbol(symbol);
			if (!avData) {
				console.error('avData undefined');
			}
			avData = avData['Time Series (5min)'];
			Object.entries(avData).forEach((entry: any) => {
				const time = entry[0];
				const data = entry[1];
				let hourMin = new Date(time).toLocaleTimeString();
				hourMin = hourMin.substring(0, hourMin.length - 6);
				newChartData.push({
					timestamp: time,
					hourMin: hourMin,
					open: data['1. open'],
					high: data['2. high'],
					low: data['3. low'],
					close: data['4. close'],
					volume: data['5. volume'],
				});
			});
			newChartData = newChartData.sort(
				(a, b) =>
					new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
			);
			setChartData(newChartData);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [symbol]);

	return (
		<>
			<H1>{symbol}</H1>
			<div className="mb-1">
				<Button
					className="mx-1"
					onClick={() => {
						setSymbol('AAPL');
					}}
				>
					AAPL
				</Button>
				<Button
					className="mx-1"
					onClick={() => {
						setSymbol('GOOGL');
					}}
				>
					GOOGL
				</Button>
				<Button
					className="mx-1"
					onClick={() => {
						setSymbol('IBM');
					}}
				>
					IBM
				</Button>
				<Button
					className="mx-1"
					onClick={() => {
						setSymbol('JPM');
					}}
				>
					JPM
				</Button>
				<Button
					className="mx-1"
					onClick={() => {
						setSymbol('MSFT');
					}}
				>
					MSFT
				</Button>
			</div>
			<LineChart
				height={300}
				width={900}
				data={chartData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				className="w-full"
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="hourMin" name="Hello World" />
				<YAxis domain={['auto', 'auto']} />
				<Tooltip />
				<Legend />
				<Line type="monotone" name="Open" dataKey="open" stroke="#8884d8" />
				<Line type="monotone" name="High" dataKey="high" stroke="#82ca9d" />
				<Line type="monotone" name="Close" dataKey="close" stroke="#f77f00" />
				<Line type="monotone" name="Low" dataKey="low" stroke="#219ebc" />
			</LineChart>
		</>
	);
}
