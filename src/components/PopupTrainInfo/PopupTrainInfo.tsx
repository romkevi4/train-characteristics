import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { ITrainProps, ICharacteristicsOfTrain } from '../../../models';
import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';

import { openPopupWithTrainInfo } from '../../store/slices/trainsCharacteristicsSlice';

import './PopupTrainInfo.css';

export default function PopupTrainInfo() {
	const { isOpen, activeCharacteristicsOfTrain } = useSelector((state: RootState) => ({
		isOpen: state.trains.isOpen,
		activeCharacteristicsOfTrain: state.trains.activeCharacteristicsOfTrain
	}));

	console.log(isOpen);
	console.log(activeCharacteristicsOfTrain);

	function openTrainInfo() {

	}

	return (
		<div className={`train-list ${!isOpen ? '' : 'train-list_inactive'}`}>
			<h2 className="train-list__title">Поезда</h2>
			<p className="train-list__title"></p>

			<table className="train-list__table">
				<thead className="train-list__thead">
					<tr>
						<th className="train-list__header">Ток двигателя</th>
						<th className="train-list__header">Сила тяги</th>
						<th className="train-list__header">Скорость</th>
					</tr>
				</thead>

				<tbody className="train-list__tbody">
					{
						activeCharacteristicsOfTrain.map((elem: ICharacteristicsOfTrain, index: number) => {
							return <TrainCharacteristics characteristics={elem} key={index }/>
						})
					}
				</tbody>
			</table>

			<button type="submit">Отправить данные</button>
		</div>
	);
}