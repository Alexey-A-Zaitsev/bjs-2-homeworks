// Задача №1
function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length &&
		arr1.every((value, index) => value === arr2[index])) {
		return true;
	} else return false
}


// Задача №2
function getUsersNamesInAgeRange(users, gender) {
	// фильтруем пользователй по полу
	const filterUsers = users.filter(user => user.gender === gender);
	// проверка на пустой массив
	if (filterUsers != 0) {
		// среднее значение возраста пользователей одного пола
		const averAge = filterUsers.reduce((acc, user) =>
			acc + user.age / filterUsers.length, 0)
		return averAge;
	} else return 0;
}