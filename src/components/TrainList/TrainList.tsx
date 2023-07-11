import { useSelector } from 'react-redux';
import uniqId from 'uniqid';

import { RootState } from '../../store/store';
import { Itrain } from '../../../models';

import Train from '../Train/Train';

import './TrainList.css';

export default function TrainList() {
	const trainsArr = useSelector((state: RootState) => state.trains.trainsArr);

	return (
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
						trainsArr.map((item: Itrain) => {
							const id: string = uniqId();
							return <Train item={item} key={id} />
						})
					}
				</tbody>
			</table>
		</div>
	);
}