import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { INewTrain } from '../../../models';

import Train from '../Train/Train';
import PopupTrainInfo from '../PopupTrainInfo/PopupTrainInfo';

import './TrainList.css';

export default function TrainList() {
	const trainsArr = useSelector((state: RootState) => state.trains.trainsArr);

	return (
		<>
			<div className="train-list">
				<h1 className="train-list__title">Поезда</h1>

				<table className="train-list__table">
					<thead className="train-list__thead">
					<tr>
						<th className="train-list__header">Название</th>
						<th className="train-list__header">Описание</th>
					</tr>
					</thead>

					<tbody className="train-list__tbody">
					{
						trainsArr.map((item: INewTrain) => <Train item={item} key={item.id} />)
					}
					</tbody>
				</table>
			</div>

			<PopupTrainInfo />
		</>
	);
}