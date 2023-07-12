import { ICharacteristicsProps } from '../../../models';

export default function TrainCharacteristics({ characteristics }: ICharacteristicsProps) {
	return (
		<tr className="train">
			<td className="train__element train__element_position_center">{characteristics.engineAmperage}</td>
			<td className="train__element train__element_position_center">{characteristics.force}</td>
			<td className="train__element train__element_position_center">{characteristics.speed}</td>
		</tr>
	);
}