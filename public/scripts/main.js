let initialDate = document.querySelector('.date')

let formattedDate = new Date(initialDate).toLocaleDateString('nl-NL', {
  day: '2-digit',
  month: 'short',
  hour12: false

})
console.log(formattedDate)