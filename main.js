const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const arrAnswer = [
	'Kości zostały rzucone',
	'Zadaj pytanie ponownie',
	'Bez wątpienia',
	'Bardzo prawdopodobne ',
	'Tak',
	'Na dobry początek',
	'Możesz na to liczyć',
	'Moim zdaniem tak',
	'Mało prawdopodobne',
	'Nie licz na to',
	'Niemożliwe',
	'To twoje przeznaczenie',
	'To nie jest to',
	'Zejdź na ziemię',
	'No raczej nie inaczej',
	'Nie masz czasem uczucia, że to co robisz nie ma sensu ?',
]

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	ball.classList.remove('shake-animation')
	answer.innerHTML = ''

	if (input.value.includes('?')) {
		generateAnswer()
		error.textContent = ''
	} else if (!input.value.includes('?') && input.value !== '') {
		error.textContent = 'Pytanie musi zawierać "?"'
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie'
	}
}

const generateAnswer = () => {
	const newArray = arrAnswer[Math.floor(Math.random() * arrAnswer.length)]
	answer.innerHTML = `<span>Odpowiedź:</span> ${newArray}`
}

ball.addEventListener('click', shakeBall)
