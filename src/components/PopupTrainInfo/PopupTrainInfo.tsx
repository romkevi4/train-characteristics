// import { example } from '../../utils/example';
// import { IcharacteristicsOfTrain, Itrain} from '../../../models';
// import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';
//
// import './PopupTrainInfo.css';
//
// export default function PopupTrainInfo({ item, id }: Itrain) {
// 	return (
// 		<div className="train-list">
// 			<h2 className="train-list__title">Поезда</h2>
// 			<p></p>
//
// 			<table className="train-list__table">
// 				<thead className="train-list__thead">
// 					<tr>
// 						<th className="train-list__header">Ток двигателя</th>
// 						<th className="train-list__header">Сила тяги</th>
// 						<th className="train-list__header">Скорость</th>
// 					</tr>
// 				</thead>
//
// 				<tbody className="train-list__tbody">
// 					{
// 						item.characteristics.map((elem: IcharacteristicsOfTrain) => {
// 							// return <TrainCharacteristics characteristics={elem} id={id }/>
// 						})
// 					}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }