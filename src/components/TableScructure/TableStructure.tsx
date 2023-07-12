// import {ICharacteristicsOfTrain, ITableSelectorProps, ITableStructureProps} from '../../../models';
// import TrainCharacteristics from '../TrainCharacteristics/TrainCharacteristics';
//
// import './TableStructure.css';
//
// export default function TableStructure({
// 	array,
// 	isOpen,
// 	trainListSize,
// 	trainListInactive,
// 	thPosition,
// 	Tag,
// 	children
// }: ITableStructureProps) {
// 	return (
// 		<div className={`train-list ${trainListSize} ${isOpen ? '' : trainListInactive}`}>
// 			<h2 className="train-list__title">Поезда</h2>
// 			<p className="train-list__title">Поезд № 1</p>
// 			{children}
//
// 			<table className="train-list__table">
// 				<thead className="train-list__thead">
// 				<tr>
// 					<th className={`train-list__header ${thPosition}`}>Ток двигателя</th>
// 					<th className={`train-list__header ${thPosition}`}>Сила тяги</th>
// 					<th className={`train-list__header ${thPosition}`}>Скорость</th>
// 				</tr>
// 				</thead>
//
// 				<tbody className="train-list__tbody">
// 				{
// 					array.map((item: ICharacteristicsOfTrain, index: number) => {
// 						return <Tag item={item} key={index} />
// 					})
// 				}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }