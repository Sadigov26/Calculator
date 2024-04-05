const numbers = document.querySelectorAll('.btns')
const display = document.getElementById('text')
const clear = document.getElementById('clear')
const hesabla = document.getElementById('btns')

numbers.forEach(number  => {
  number.addEventListener('click', () => {
    display.value += number.innerText
  })
});

clear.addEventListener('click', () => {
  display.value = ""
})
hesabla.addEventListener('click', () => {
  const result = eval(display.value)
  display.value = result
})