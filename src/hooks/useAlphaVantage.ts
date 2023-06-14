// Alpha Vantage API Documentation: https://www.alphavantage.co/documentation/
const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

export function useAlphaVantage() {
	async function getTimeSeriesIntradayBySymbol(symbol: string) {
		return fetch(
			`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
		)
			.then((res) => res.json())
			.then((jsonData) => jsonData);
	}

	function logData() {
		console.log(apiKey);
	}

	return { getTimeSeriesIntradayBySymbol, logData };
}
