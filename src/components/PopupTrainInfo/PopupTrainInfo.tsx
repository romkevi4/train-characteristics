import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { INewCharacteristicsOfTrain } from '../../../models';
import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';

import './PopupTrainInfo.css';

const isOpenSelector = (state: RootState) => state.trains.isOpen;
const activeCharacteristicsOfTrainSelector = (state: RootState) => state.trains.activeCharacteristicsOfTrain;
const trainNameSelector = (state: RootState) => state.trains.trainName;

const popupTrainInfoSelector = createSelector(
	isOpenSelector,
	activeCharacteristicsOfTrainSelector,
	trainNameSelector,
	(isOpen, activeCharacteristicsOfTrain, trainName) => ({
		isOpen,
		activeCharacteristicsOfTrain,
		trainName,
	})
);

export default function PopupTrainInfo() {
	const { isOpen, activeCharacteristicsOfTrain, trainName } = useSelector(popupTrainInfoSelector);

	function onSubmit(evt: React.FormEvent) {
		evt.preventDefault();

		const speedLimitList: any[] = [];
		activeCharacteristicsOfTrain.forEach((item: INewCharacteristicsOfTrain) => speedLimitList.push(item.speed));

		console.log(speedLimitList.sort((oneValue, TwoValue) => oneValue - TwoValue));
	}

	const checkId = (
		name: string,
		value: string,
		characteristics: INewCharacteristicsOfTrain[],
		param: number | undefined,
		func: Function
	) => {
		const id = name.split('-')[1];
		const item = characteristics.find((info) => info._id === id);
		console.log(item);

		if (item) {
			func({
				param: Number(value),
				_id: id
			});
		}
	}

	return (
		<form
			method="post"
			onSubmit={onSubmit}
			name="formTrainCharacteristics"
			className={`popup-train-info ${isOpen ? '' : 'popup-train-info_inactive'}`}
		>
			<div className="train-list train-list_size_big">
				<h2 className="train-list__title">Поезда</h2>
				<p className="train-list__title">{trainName}</p>

				<table className="train-list__table">
					<thead className="train-list__thead">
					<tr>
						<th className="train-list__header train-list__header_position_center">Ток двигателя</th>
						<th className="train-list__header train-list__header_position_center">Сила тяги</th>
						<th className="train-list__header train-list__header_position_center">Скорость</th>
					</tr>
					</thead>

					<tbody className="train-list__tbody">
						{
							activeCharacteristicsOfTrain.map((elem: INewCharacteristicsOfTrain) => {
								return (
									<TrainCharacteristics elem={elem} key={elem._id} checkId={checkId} />
								);
							})
						}
					</tbody>
				</table>
			</div>

			<button type="submit" className="popup-train-info__btn-submit">Отправить данные</button>
		</form>
	);
}