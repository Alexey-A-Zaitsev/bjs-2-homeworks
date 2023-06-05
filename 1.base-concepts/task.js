"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	var d = Math.pow(b, 2) - 4 * a * c; // Расчет дискриминанта
	if (d < 0) {
		return arr;
	} else if (d == 0) {
		arr.push((-b) / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let convertedPercent = percent / 100 / 12; // преобразование процентной ставки в месячную
	let loanBody = amount - contribution; // тело кредита
	let monthlyFee = loanBody *
		(convertedPercent + (convertedPercent / ((Math.pow((1 + convertedPercent), countMonths) - 1))))
	let totalAmount = monthlyFee * countMonths;
	return +totalAmount.toFixed(2);
}