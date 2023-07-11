import { ICharacteristicsProps } from '../../../models';

export default function TrainCharacteristics({ characteristics }: ICharacteristicsProps) {
	return (
		<tr className="train">
			<td className="train__element">{characteristics.engineAmperage}</td>
			<td className="train__element">{characteristics.force}</td>
			<td className="train__element">{characteristics.speed}</td>
		</tr>
	);
}