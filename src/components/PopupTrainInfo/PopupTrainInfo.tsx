import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import {ITrainProps, INewCharacteristicsOfTrain } from '../../../models';
import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';

import { openPopupWithTrainInfo } from '../../store/slices/trainsCharacteristicsSlice';

import './PopupTrainInfo.css';

export default function PopupTrainInfo() {
	const { isOpen, activeCharacteristicsOfTrain, trainName } = useSelector((state: RootState) => ({
		isOpen: state.trains.isOpen,
		activeCharacteristicsOfTrain: state.trains.activeCharacteristicsOfTrain,
		trainName: state.trains.trainName
	}));

	function openTrainInfo() {

	}

	function onSubmit(evt: React.FormEvent) {
		evt.preventDefault();

		const speedLimitList: any[] = [];
		activeCharacteristicsOfTrain.forEach((item: INewCharacteristicsOfTrain) => {
			return speedLimitList.push(item.speed);
		})

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

		if (item) {
			return func({
				param: Number(value),
				_id: id
			});
		}

		return;
	}

	const onChange = (
		name: string,
		value: string,
		characteristic: number | undefined,
		funcSetCharacteristics: Function,
		nameInput: string
	) => {
		if (name.startsWith(`${nameInput}-`)) {
			checkId(name, value, activeCharacteristicsOfTrain, characteristic, funcSetCharacteristics);
		}
	}

	return (
		<form
			method="post"
			onSubmit={onSubmit}
			name="formTrainCharacteristics"
			className="popup-train-info"
		>
			<div className={`train-list train-list_size_big ${isOpen ? '' : 'train-list_inactive'}`}>
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
									<TrainCharacteristics elem={elem} key={elem._id} onChange={onChange} />
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