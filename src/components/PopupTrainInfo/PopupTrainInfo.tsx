import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { example } from '../../utils/example';
import { TrainProps, IcharacteristicsOfTrain } from '../../../models';
import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';

import { openTrainInfo } from '../../store/slices/trainCharacteristicsSlice';

import './PopupTrainInfo.css';

export default function PopupTrainInfo({ item, id }: TrainProps) {
	// const [ isOpen, setIsOpen ] = useState(false);
	// const isOpen = useSelector((state: any) => state.trainCharacteristics.isOpen);

	function findOfTrain() {

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
					{
						item.characteristics.map((elem: IcharacteristicsOfTrain) => {
							return <TrainCharacteristics characteristics={elem} id={id }/>
						})
					}
				</tbody>
			</table>

			<button type="submit">Отправить данные</button>
		</div>
	);
}