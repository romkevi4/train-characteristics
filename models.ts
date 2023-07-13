export interface ICharacteristicsOfTrain {
	speed: number | undefined,
	force: number | undefined,
	engineAmperage: number | undefined
}

export interface INewCharacteristicsOfTrain extends ICharacteristicsOfTrain{
	_id: string
}

export interface ITrain {
	name: string,
	description: string,
	characteristics: ICharacteristicsOfTrain[]
}

export interface INewTrain extends ITrain{
	characteristics: INewCharacteristicsOfTrain[],
	id: string
}

export interface ITrainInfo {
	isOpen: boolean,
	activeCharacteristicsOfTrain: INewCharacteristicsOfTrain[],
	trainName: string,
	trainsArr: INewTrain[],
	newSpeed: number | undefined,
	newForce: number | undefined,
	newEngineAmperage: number | undefined
}

export interface ITrainProps {
	item: INewTrain,
}

export interface ICharacteristicsProps {
	elem: INewCharacteristicsOfTrain,
	onChange: Function
}
