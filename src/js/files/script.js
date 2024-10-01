// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', function () {
	// получаем элементы, содержащие компоненты даты
	const hoursEl = document.querySelector('.hours');
	const minutesEl = document.querySelector('.minutes');
	const secondsEl = document.querySelector('.seconds');
	function setDeadline() {
		let time = new Date();
		time.setMinutes(time.getMinutes() + 30);
		return time;
	}

	let deadline = setDeadline();

	// id таймера
	let timerId = null;

	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		let diff = deadline - new Date();
		if (diff <= 0) {
			console.log('clear');
			deadline = setDeadline();
		}

		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

		hoursEl.textContent = hours < 10 ? '0' + hours : hours;
		minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
		secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
	}

	// вызываем функцию countdownTimer
	countdownTimer();

	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
});
