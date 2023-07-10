import { TrainProps } from '../../../models';

import './Train.css';

export default function Train({ item, id }: TrainProps) {
	return (
		<tr className="train" key={id}>
			<td className="train__element">{item.name}</td>
			<td className="train__element">{item.description}</td>
		</tr>
	);
}