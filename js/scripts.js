
function labelGenerator(quantity, start, preFor, where) {
  const dad = document.querySelector(where); // onde vou por as labels
  for (i = start; i < quantity + start; i++) {
    let label = document.createElement('label');
    label.classList.add('label');
    label.setAttribute('for', preFor + i);
    label.innerText = i < 10 ? '0' + i : i;
    dad.appendChild(label);
  }
}

function inputGenerator(type, quantity, start, preId, name, where) {
  const dad = document.querySelector(where); // onde vou por os inputs
  for (i = start; i < quantity + start; i++) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', preId + i);
    input.setAttribute('value', i);
    input.classList.add('hidden');
    input.addEventListener('change', changeRadio);
    dad.appendChild(input);
  }
}

function changeRadio(e) {

  let radioId = e.target.id;
  let radioValue = parseInt(e.target.value);

  for (let i = 0; i < todasLabels.length; i++) {
    todasLabels[i].classList.remove('label-active');
    if (todasLabels[i].getAttribute('for') == radioId) {
      todasLabels[i].classList.add('label-active');
    }
  }

  let spanValor = document.querySelector('#valor');

  switch (radioValue) {
    case 6:
      spanValor.innerText = 'R$ 4,50';
      break;
      
    case 7:
      spanValor.innerText = 'R$ 31,50';
      break;

    case 8:
      spanValor.innerText = 'R$ 126,00';
      break;

    case 9:
      spanValor.innerText = 'R$ 378,00';
      break;

    case 10:
      spanValor.innerText = 'R$ 945,00';
      break;
      
    case 11:
      spanValor.innerText = 'R$ 2.079,00';
      break;

    case 12:
      spanValor.innerText = 'R$ 4.158,00';
      break;

    case 13:
      spanValor.innerText = 'R$ 7.722,00';
      break;

    case 14:
      spanValor.innerText = 'R$ 13.513,50';
      break;

    case 15:
      spanValor.innerText = 'R$ 22.522,50';
      break;

    default:
      break;
  }

}

labelGenerator(10, 6, 'radio-', '.container-labels');
inputGenerator('radio', 10, 6, 'radio-', 'qnt-numbers', '.container-labels');

let todasLabels = document.querySelectorAll('.label');
todasLabels[0].click(); // dispara um click na primeira label para o input já vir marcado.