import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { ItrainProps, IcharacteristicsOfTrain } from '../../../models';
import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';

import { openPopupWithTrainInfo } from '../../store/slices/trainsCharacteristicsSlice';

import './PopupTrainInfo.css';

export default function PopupTrainInfo() {
	const isOpen = useSelector((state: RootState) => state.trains.isOpen);

	function openTrainInfo() {

	}

	return (
		<div className={`train-list ${!isOpen ? '' : 'train-list_inactive'}`}>
			<h2 className="train-list__title">Поезда</h2>
			<p></p>

			<table className="train-list__table">
				<thead className="train-list__thead">
					<tr>
						<th className="train-list__header">Ток двигателя</th>
						<th className="train-list__header">Сила тяги</th>
						<th className="train-list__header">Скорость</th>
					</tr>
				</thead>

				<tbody className="train-list__tbody">
					{/*{*/}
					{/*	item.characteristics.map((elem: IcharacteristicsOfTrain) => {*/}
					{/*		return <TrainCharacteristics characteristics={elem} id={id }/>*/}
					{/*	})*/}
					{/*}*/}
				</tbody>
			</table>

			<button type="submit">Отправить данные</button>
		</div>
	);
}