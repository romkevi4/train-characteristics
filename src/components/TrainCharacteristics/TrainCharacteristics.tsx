import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import {ICharacteristicsProps, INewCharacteristicsOfTrain} from '../../../models';

import {
	handleValueNewSpeedOfTrain,
	handleValueNewForcesOfTrain,
	handleValueNewEngineAmperageOfTrain
} from '../../store/slices/trainsCharacteristicsSlice';

export default function TrainCharacteristics({ elem }: ICharacteristicsProps) {
	const { newSpeed, newForce, newEngineAmperage, activeCharacteristicsOfTrain } = useSelector((state: RootState) => ({
		newSpeed: state.trains.newSpeed,
		newForce: state.trains.newForce,
		newEngineAmperage: state.trains.newEngineAmperage,
		activeCharacteristicsOfTrain: state.trains.activeCharacteristicsOfTrain
	}));

	const dispatch = useDispatch();
	const setNewSpeed = (obj: {newSpeed: number | undefined, _id: string}) => dispatch(handleValueNewSpeedOfTrain(obj));
	const setNewForce = (obj: {newForce: number | undefined, _id: string}) => dispatch(handleValueNewForcesOfTrain(obj));
	const setNewEngineAmperage = (obj: {newEngineAmperage: number | undefined, _id: string}) => dispatch(handleValueNewEngineAmperageOfTrain(obj));

	const checkId = (
		name: string,
		value: string,
		characteristics: INewCharacteristicsOfTrain[],
		param: number | undefined,
		func: Function
	) => {
		const id = name.split('-')[1];

		const item = characteristics.find((info) => info._id === id);

		if (item) {
			return func({
				param: Number(value),
				_id: id
			});
		}

		return;
	}

	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;

		if (name.startsWith('engineAmperage-')) {
			checkId(name, value, activeCharacteristicsOfTrain, newEngineAmperage, setNewEngineAmperage);
		}
		// 	const id = name.split('-')[1];
		//
		// 	const item = activeCharacteristicsOfTrain.find((info) => info._id === id);
		//
		//
		// 	if (item) {
		// 		setNewEngineAmperage({
		// 			newEngineAmperage: Number(value),
		// 			_id: id
		// 		});
		// 	}
		// }

		if (name.startsWith('force-')) {
			checkId(name, value, activeCharacteristicsOfTrain, newForce, setNewForce);
		}

		if (name.startsWith('speed-')) {
			checkId(name, value, activeCharacteristicsOfTrain, newSpeed, setNewSpeed);
		}
	}

	return (
		<tr className="train">
			<td className="train__element train__element_position_center">
				<input
					type="text"
					name={`engineAmperage-${elem._id}`}
					onChange={onChange}
					value={newEngineAmperage !== undefined ? newEngineAmperage : elem.engineAmperage}
					required
					autoComplete="off"
					className="train__input"
				/>
			</td>
			<td className="train__element train__element_position_center">
				{/*{elem.force}*/}
				<input
					type="text"
					name={`force-${elem._id}`}
					onChange={onChange}
					value={newForce !== undefined ? newForce : elem.force}
					required
					autoComplete="off"
					className="train__input"
				/>
			</td>
			<td className="train__element train__element_position_center">
				{/*{elem.speed}*/}
				<input
					type="text"
					name={`speed-${elem._id}`}
					onChange={onChange}
					value={newSpeed !== undefined ? newSpeed : elem.speed}
					required
					autoComplete="off"
					className="train__input"
				/>
			</td>
		</tr>
	);
}