// Enum is non-exhaustive, codes are from the BLS API documentation at:
// https://download.bls.gov/pub/time.series/cu/cu.item
export enum CpiItemCodes {
	AllItems = 'SA0',
	PurchasingPowerOfTheConsumerDollar = 'SA0R',
	MensAndBoysApparel = 'SAA1',
	WomensAndGirlsApparel = 'SAA2',
	Commodities = 'SAC',
	EnergyCommodities = 'SACE',
	FoodAndBeverages = 'SAF',
	Food = 'SAF1',
	Housing = 'SAH',
	Shelter = 'SAH1',
	FuelsAndUtilities = 'SAH2',
	HouseholdEnergy = 'SAH21',
	MedicalCare = 'SAM',
	JewelryAndWatches = 'SEAG',
	Jewelry = 'SEAG01',
	Watches = 'SEAG02',
	Coffee = 'SEFP01',
}
