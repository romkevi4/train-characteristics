export async function TrainListApi() {
	return await fetch('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9')
		.then(res => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
		});
}
