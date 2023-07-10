import uniqId from 'uniqid';

import Train from '../Train/Train';

import { example } from '../../utils/example';
import { Itrain } from '../../../models';

import './TrainList.css';

export default function TrainList() {
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
						example.map((item: Itrain) => {
							const id: string = uniqId();

							return <Train item={item} id={id} />
						})
					}
				</tbody>
			</table>
		</div>
	);
}