// Alpha Vantage API Documentation: https://www.alphavantage.co/documentation/

const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

export function useAlphaVantage() {
	function logData() {
		console.log(apiKey);
	}

	return { logData };
}
