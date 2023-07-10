interface IcharacteristicsOfTrain {
	speed: number,
	force: number,
	engineAmperage: number
}

export interface Itrain {
	name: string,
	description: string,
	characteristics: IcharacteristicsOfTrain[]
}

export interface TrainProps {
	item: Itrain,
	id: string
}