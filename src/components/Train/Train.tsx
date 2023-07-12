import { useSelector, useDispatch} from 'react-redux';

import { RootState } from '../../store/store';
import { ICharacteristicsOfTrain, ITrainProps} from '../../../models';

import './Train.css';
import { openPopupWithTrainInfo } from '../../store/slices/trainsCharacteristicsSlice';

export default function Train({ item }: ITrainProps) {
	const isOpen = useSelector((state: RootState) => state.trains.isOpen);
	// // const [ train, setTrain ] = useState({});
	//
	const dispatch = useDispatch();

	const setTrainInfo = (obj: {isOpen: boolean, activeCharacteristicsOfTrain: ICharacteristicsOfTrain[], trainName: string}) => dispatch(openPopupWithTrainInfo(obj))

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