import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { TrainProps } from '../../../models';

import './Train.css';
import { openPopupWithTrainInfo } from '../../store/slices/trainCharacteristicsSlice';

export default function Train({ item, id }: TrainProps) {
	const isOpen = useSelector((state: any) => state.trainCharacteristics.isOpen);
	// const [ train, setTrain ] = useState({});

	const dispatch = useDispatch();

	const setTrainInfo = (obj: object) => dispatch(openPopupWithTrainInfo(obj))

	function chooseTrain() {
		setTrainInfo({
			isOpen: true,
		})
	}

	return (
		<tr className="train" key={id} onClick={chooseTrain}>
			<td className="train__element">{item.name}</td>
			<td className="train__element">{item.description}</td>
		</tr>
	);
}