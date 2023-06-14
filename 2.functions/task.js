// Задача №1
function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	const avg = +(sum / arr.length).toFixed(2);
	return {
		max: max,
		min: min,
		avg: avg
	}
}

// Задача №2
function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length != 0) {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	} else return 0;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length != 0) {
		let min = Infinity;
		let max = -Infinity;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		return max - min;
	} else return 0;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length != 0) {
		let sumEvenElement = 0; // сумма четных элементов
		let sumOddElement = 0; // сумма нечетных элементов
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement
	} else return 0;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length != 0) {
		let sumEvenElement = 0; //  сумма чётных элементов
		let countEvenElement = 0; //  кол-во чётных элементов
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		return sumEvenElement / countEvenElement
	} else return 0;
}

// Задача №3
function makeWork(arrOfArr, func) {
	if (arrOfArr.length != 0) {
		let maxWorkerResult = -Infinity;
		for (let i = 0; i < arrOfArr.length; i++) {
			const result = func(...arrOfArr[i]);
			if (result > maxWorkerResult) {
				maxWorkerResult = result
			}
		}
		return maxWorkerResult;
	} else return 0;
}