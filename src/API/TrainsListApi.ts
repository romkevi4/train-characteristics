// import { useDispatch } from 'react-redux';
//
// import { handleTrainsInfo } from '../store/slices/trainsCharacteristicsSlice';
// import { Itrain } from '../../models';
//
// export async function TrainsListApi() {
// 	const dispatch = useDispatch();
// 	const getTrainsList = (obj: {trainsArr: Promise<Itrain[]>}) => dispatch(handleTrainsInfo(obj));
//
// 	return await fetch('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9')
// 		.then(res => {
// 			if (res.ok) {
// 				console.log(res);
// 				return getTrainsList({trainsArr: res.json()});
// 			}
//
// 			return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
// 		});
// }

export async function TrainsListApi() {
	return await fetch('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9')
		.then(res => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
		});
}
