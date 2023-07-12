import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { ITrainProps, ICharacteristicsOfTrain } from '../../../models';
import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';

import { openPopupWithTrainInfo } from '../../store/slices/trainsCharacteristicsSlice';

import './PopupTrainInfo.css';

export default function PopupTrainInfo() {
	const { isOpen, activeCharacteristicsOfTrain, trainName } = useSelector((state: RootState) => ({
		isOpen: state.trains.isOpen,
		activeCharacteristicsOfTrain: state.trains.activeCharacteristicsOfTrain,
		trainName: state.trains.trainName
	}));

	console.log(isOpen);
	console.log(activeCharacteristicsOfTrain);

	function openTrainInfo() {

	}

	function onSubmit(evt: React.FormEvent) {
		evt.preventDefault();

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
							activeCharacteristicsOfTrain.map((elem: ICharacteristicsOfTrain, index: number) => {
								return (
										<TrainCharacteristics characteristics={elem} key={index} />

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