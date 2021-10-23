
function labelGenerator(quantity, start, preFor, className, where) {
  const dad = document.querySelector(where); // onde vou por as labels
  for (i = start; i < quantity + start; i++) {
    let label = document.createElement('label');
    label.classList.add('label');
    label.classList.add(className);
    label.setAttribute('for', preFor + i);
    label.innerText = i < 10 ? '0' + i : i;
    dad.appendChild(label);
  }
}

function inputGenerator(type, quantity, start, preId, name, where, func) {
  const dad = document.querySelector(where); // onde vou por os inputs
  for (i = start; i < quantity + start; i++) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', preId + i);
    input.setAttribute('value', i);
    input.classList.add('hidden');
    input.addEventListener('change', func);
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

labelGenerator(10, 6, 'radio-', 'radio-label','.container-labels');
inputGenerator('radio', 10, 6, 'radio-', 'qnt-numbers', '.container-labels', changeRadio);

let todasLabels = document.querySelectorAll('.radio-label');
todasLabels[0].click(); // dispara um click na primeira label para o input já vir marcado.



let marcados = 0;

function changeCheckbox(e) {

  let quantity = document.querySelector('input[name="qnt-numbers"]:checked').value;

  let check = e.target;
  for (const label of checkLabels) {

    if (label.getAttribute('for') == check.id) {     

      if (label.classList.contains('label-active')) {
        label.classList.remove('label-active');
        marcados--;

        if (marcados == quantity - 1) {
          for (const checkbox of allCheckbox) {
            if(!checkbox.checked) {
              checkbox.removeAttribute('disabled');
            }
          }
        }

      } else if (marcados < quantity){
        label.classList.add('label-active');
        marcados++;
      }

      if (marcados == quantity) {
        for (const checkbox of allCheckbox) {
          if(!checkbox.checked) {
            checkbox.setAttribute('disabled', '');
          }
        }
      }
    }
  }
}

labelGenerator(60, 1, 'check-', 'check-label','.choose-numbers');
inputGenerator('checkbox', 60, 1, 'check-', 'choose-numbers', '.choose-numbers', changeCheckbox);

let checkLabels = document.querySelectorAll('.check-label');
let allCheckbox = document.querySelectorAll('input[name="choose-numbers"]');

document.querySelector('#btn-next').addEventListener('click', function() {
  document.querySelector('#container-home').classList.add('hidden');
  document.querySelector('#container-bet').classList.remove('hidden');
});