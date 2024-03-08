// let initialDate = document.querySelector('.date')
let initialDate = '2024-12-30 19:00:00'

let formattedDate = new Date(initialDate).toLocaleDateString('nl-NL', {
  day: '2-digit',
  month: 'short',
  hour12: false

})
console.log(formattedDate)