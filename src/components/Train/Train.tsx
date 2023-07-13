import { useDispatch } from 'react-redux';

import { INewCharacteristicsOfTrain, ITrainProps} from '../../../models';
import { openPopupWithTrainInfo } from '../../store/slices/trainsCharacteristicsSlice';

import './Train.css';

export default function Train({ item }: ITrainProps) {
	const dispatch = useDispatch();

	const setTrainInfo = (obj: {
		isOpen: boolean,
		activeCharacteristicsOfTrain: INewCharacteristicsOfTrain[],
		trainName: string
	}) => dispatch(openPopupWithTrainInfo(obj))

	function chooseTrain() {
		setTrainInfo({
			isOpen: true,
			activeCharacteristicsOfTrain: item.characteristics,
			trainName: item.name
		})
	}

	return (
		<>
			<tr className="train" onClick={chooseTrain}>
				<td className="train__element">{item.name}</td>
				<td className="train__element">{item.description}</td>
			</tr>
		</>
	);
}