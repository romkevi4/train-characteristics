import { useCallback } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import { ICharacteristicsProps } from '../../../models';

import {
	handleValueNewSpeedOfTrain,
	handleValueNewForcesOfTrain,
	handleValueNewEngineAmperageOfTrain
} from '../../store/slices/trainsCharacteristicsSlice';

const newSpeedSelector = (state: RootState) => state.trains.newSpeed;
const newForceSelector = (state: RootState) => state.trains.newForce;
const newEngineAmperageSelector = (state: RootState) => state.trains.newEngineAmperage;
const activeCharacteristicsOfTrainSelector = (state: RootState) => state.trains.activeCharacteristicsOfTrain;

const trainCharacteristicsSelector = createSelector(
	newSpeedSelector,
	newForceSelector,
	newEngineAmperageSelector,
	activeCharacteristicsOfTrainSelector,
	(newSpeed, newForce, newEngineAmperage, activeCharacteristicsOfTrain) => ({
		newSpeed,
		newForce,
		newEngineAmperage,
		activeCharacteristicsOfTrain
	})
);

export default function TrainCharacteristics({ elem, checkId }: ICharacteristicsProps) {
	const { newSpeed, newForce, newEngineAmperage, activeCharacteristicsOfTrain } = useSelector(trainCharacteristicsSelector);
	console.log('вызов');

	const dispatch = useDispatch();
	const setNewSpeed = (obj: {newSpeed: number | undefined, _id: string}) => dispatch(handleValueNewSpeedOfTrain(obj));
	const setNewForce = (obj: {newForce: number | undefined, _id: string}) => dispatch(handleValueNewForcesOfTrain(obj));
	const setNewEngineAmperage = (obj: {newEngineAmperage: number | undefined, _id: string}) => dispatch(handleValueNewEngineAmperageOfTrain(obj));

	const onChange = useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = evt.target;

			if (name.startsWith('engineAmperage')) {
				checkId(name, value, activeCharacteristicsOfTrain, newEngineAmperage, setNewEngineAmperage);
			}

			if (name.startsWith('force')) {
				checkId(name, value, activeCharacteristicsOfTrain, newForce, setNewForce);
			}

			if (name.startsWith('speed')) {
				console.log(value);
				checkId(name, value, activeCharacteristicsOfTrain, newSpeed, setNewSpeed);
				console.log(activeCharacteristicsOfTrain);
			}
		},[
			checkId,
			activeCharacteristicsOfTrain,
			newEngineAmperage,
			setNewEngineAmperage,
			newForce,
			setNewForce,
			newSpeed,
			setNewSpeed
		]
	);

	// function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
	// 	const { name, value } = evt.target;
	//
	// 	if (name.startsWith('engineAmperage')) {
	// 		checkId(name, value, activeCharacteristicsOfTrain, newEngineAmperage, setNewEngineAmperage);
	// 	}
	//
	// 	if (name.startsWith('force')) {
	// 		checkId(name, value, activeCharacteristicsOfTrain, newForce, setNewForce);
	// 	}
	//
	// 	if (name.startsWith('speed')) {
	// 		console.log(value);
	// 		checkId(name, value, activeCharacteristicsOfTrain, newSpeed, setNewSpeed);
	// 		console.log(activeCharacteristicsOfTrain);
	// 	}
	// }

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