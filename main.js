const blackBill = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const span = document.createElement('span')
answer.append(span)
span.textContent = 'Odpowiedź:'


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
	'Nie masz czasem uczucia, że to co robisz nie ma sensu?',
]

