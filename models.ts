export interface ICharacteristicsOfTrain {
	speed: number,
	force: number,
	engineAmperage: number
}

export interface ITrain {
	name: string,
	description: string,
	characteristics: ICharacteristicsOfTrain[]
}

export interface ITrainInfo {
	isOpen: boolean,
	activeCharacteristicsOfTrain: ICharacteristicsOfTrain[],
	trainName: string,
	trainsArr: ITrain[],
	newSpeed: number,
	newForce: number,
	newEngineAmperage: number
}

export interface ITrainProps {
	item: ITrain,
}

export interface ICharacteristicsProps {
	characteristics: ICharacteristicsOfTrain,
	key: number
}
