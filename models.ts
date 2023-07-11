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
	trainsArr: ITrain[]
}

export interface ITrainProps {
	item: ITrain,
}

export interface ICharacteristicsProps {
	characteristics: ICharacteristicsOfTrain,
}