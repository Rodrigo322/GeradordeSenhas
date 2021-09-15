const resultE = document.getElementById('result')
const lengthE = document.getElementById('length')
const uppercaseE = document.getElementById('uppercase')
const lowercaseE = document.getElementById('lowercase')
const numbersE = document.getElementById('numbers')
const symbolsE = document.getElementById('symbols')
const genereteE = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultE.innerText;

  if(!password) {return;}

  textarea.value = password;
  document.body.appendChild(textarea);

  textarea.select();

  document.execCommand('copy');
  textarea.remove();

  alert('Senha copiada com sucesso!')
});

clipboard.addEventListener('click', () => {
  const length = +lengthE.value;
  const hasLower = lowercaseE.checked;
  const hasUpper = uppercaseE.checked;
  const hasNumber = numbersE.checked;
  const hasSymbol = symbolsE.checked;

  resultE.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol)
});

function generatePassword( lower, upper, number, symbols) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbols;

  const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0])
}