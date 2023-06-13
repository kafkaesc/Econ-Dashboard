// Request code types: https://www.bls.gov/help/def/cu.htm
// Series IDs and Formats: https://www.bls.gov/help/hlpforma.htm

import { AreaCodes } from './blsAreaCodes';
import { CpiItemCodes } from './blsCpiItemCodes';

const apiKey = process.env.NEXT_PUBLIC_BLS_API_KEY;

export function useBlsData() {
	function logData() {
		console.log('API Key: ', apiKey);
		console.log('AreaCodes: ', AreaCodes);
		console.log('CpiItemCodes: ', CpiItemCodes);
	}

	function getConsumerPriceIndex() {
		console.log('getConsumerPriceIndex is not yet implemented');
	}

	return { logData, getConsumerPriceIndex };
}
