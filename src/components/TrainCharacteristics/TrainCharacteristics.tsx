import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import { ICharacteristicsProps } from '../../../models';

import {
	handleValueNewSpeedOfTrain,
	handleValueNewForcesOfTrain,
	handleValueNewEngineAmperageOfTrain
} from '../../store/slices/trainsCharacteristicsSlice';

export default function TrainCharacteristics({ characteristics, key: id }: ICharacteristicsProps) {
	const { newSpeed, newForce, newEngineAmperage } = useSelector((state: RootState) => ({
		newSpeed: state.trains.newSpeed,
		newForce: state.trains.newForce,
		newEngineAmperage: state.trains.newEngineAmperage
	}));

	const dispatch = useDispatch();
	const setNewSpeed = (obj: {newSpeed: number}) => dispatch(handleValueNewSpeedOfTrain(obj));
	const setNewForce = (obj: {newForce: number}) => dispatch(handleValueNewForcesOfTrain(obj));
	const setNewEngineAmperage = (obj: {newEngineAmperage: number}) => dispatch(handleValueNewEngineAmperageOfTrain(obj));

	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;

		// setFormParams((previous) => ({
		// 	...previous,
		// 	[name]: value,
		// }));
		//
		// if (name === 'email') {
		// 	if (!validateEmail(value)) {
		// 		evt.target.setCustomValidity('invalid email');
		// 	} else {
		// 		evt.target.setCustomValidity('');
		// 	}
		// }
		//
		// checkValidity(evt);
		//
		if (name === 'engineAmperage') {
			setNewEngineAmperage({
				newEngineAmperage: Number(value)
			});
		}

		if (name === 'force') {
			setNewForce({
				newForce: Number(value)
			});
		}

		if (name === 'speed') {
			setNewSpeed({
				newSpeed: Number(value)
			})
		}
	}

	return (
		<tr className="train">
			<td className="train__element train__element_position_center">
				<input
					type="text"
					name="engineAmperage"
					onChange={onChange}
					value={newEngineAmperage || characteristics.engineAmperage}
					required
					autoComplete="off"
					className="train__input"
				/>
			</td>
			<td className="train__element train__element_position_center">
				{/*{characteristics.force}*/}
				<input
					type="text"
					name="force"
					onChange={onChange}
					value={newForce || characteristics.force}
					required
					autoComplete="off"
					className="train__input"
				/>
			</td>
			<td className="train__element train__element_position_center">
				{/*{characteristics.speed}*/}
				<input
					type="text"
					name="speed"
					onChange={onChange}
					value={newSpeed || characteristics.speed}
					required
					autoComplete="off"
					className="train__input"
				/>
			</td>
		</tr>
	);
}