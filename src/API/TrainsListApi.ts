import { TRAINS_LIST } from '../utils/resources';

export async function TrainsListApi() {
	return await fetch(`https://${TRAINS_LIST}`)
		.then(res => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
		});
}
