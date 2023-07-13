interface ICharacteristicsOfTrain {
	speed: number | undefined,
	force: number | undefined,
	engineAmperage: number | undefined
}

interface INewCharacteristicsOfTrain extends ICharacteristicsOfTrain{
	_id: string
}

interface ITrain {
	name: string,
	description: string,
	characteristics: ICharacteristicsOfTrain[]
}

interface INewTrain extends ITrain{
	characteristics: INewCharacteristicsOfTrain[],
	id: string
}

interface ITrainInfo {
	isOpen: boolean,
	activeCharacteristicsOfTrain: INewCharacteristicsOfTrain[],
	trainName: string,
	trainsArr: INewTrain[],
	newSpeed: number | undefined,
	newForce: number | undefined,
	newEngineAmperage: number | undefined
}

interface ITrainProps {
	item: INewTrain,
}

interface ICharacteristicsProps {
	elem: INewCharacteristicsOfTrain,
	checkId: Function
}

export type {
	ICharacteristicsOfTrain,
	INewCharacteristicsOfTrain,
	ITrain,
	INewTrain,
	ITrainInfo,
	ITrainProps,
	ICharacteristicsProps
}
