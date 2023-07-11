import { IcharacteristicsProps } from '../../../models';

export default function TrainCharacteristics({ characteristics, id }: IcharacteristicsProps) {
	return (
		<tr className="train" key={id}>
			{/*<td className="train__element">{characteristics.engineAmperage}</td>*/}
			{/*<td className="train__element">{characteristics.force}</td>*/}
			{/*<td className="train__element">{characteristics.speed}</td>*/}
		</tr>
	);
}