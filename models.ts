export interface IcharacteristicsOfTrain {
	speed: number,
	force: number,
	engineAmperage: number
}

export interface Itrain {
	name: string,
	description: string,
	characteristics: IcharacteristicsOfTrain[]
}

export interface ItrainProps {
	item: Itrain,
	key: string
}

export interface IcharacteristicsProps {
	characteristics: IcharacteristicsOfTrain[],
	id: string
}

export interface ItrainInfo {
	isOpen: boolean,
	trainsArr: Itrain[]
}