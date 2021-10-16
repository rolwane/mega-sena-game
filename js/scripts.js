function check(id, value) {

    let todasLabels = document.querySelectorAll('.lb-radio');

    let clickedLabel = document.querySelector('#'+id+'_label');

    let valorAposta = document.querySelector('#valor');

    for (i = 0; i < todasLabels.length; i++) {
        todasLabels[i].classList.remove('label-active');
    }

    clickedLabel.classList.add('label-active');

    switch ( value ) {

        case '06':
            valorAposta.innerHTML = 'R$ 4,50';
            break;

        case '07':
            valorAposta.innerHTML = 'R$ 31,50';
            break;

        case '08':
            valorAposta.innerHTML = 'R$ 126,00';
            break;

        case '09':
            valorAposta.innerHTML = 'R$ 378,00';
            break;

        case '10':
            valorAposta.innerHTML = 'R$ 945,00';
            break;

        case '11':
            valorAposta.innerHTML = 'R$ 2.079,00';
            break;

        case '12':
            valorAposta.innerHTML = 'R$ 4.158,00';
            break;

        case '13':
            valorAposta.innerHTML = 'R$ 7.722,00';
            break;

        case '14':
            valorAposta.innerHTML = 'R$ 13.513,50';
            break;

        case '15':
            valorAposta.innerHTML = 'R$ 22.522,50';
            break;
    }

}


let cont = 0;

function choice(id, value) {
    
    let clickedLabel = document.querySelector('#'+id+'_label');

    let allChecks = document.querySelectorAll('.checkbox');

    let qntNumbers = document.querySelector('input[name="qnt-number"]:checked').value;

    if( clickedLabel.classList.contains('label-active') ) {

        clickedLabel.classList.remove('label-active');

        for (i = 0; i < allChecks.length; i++) {

            allChecks[i].disabled = false

        }

        cont--

    }else {

        if ( cont < qntNumbers ) {

            clickedLabel.classList.add('label-active');

            cont++

        }

    }

    if( cont == qntNumbers ) {

        for ( i = 0; i < allChecks.length; i++ ) {

            if( !allChecks[i].checked ) {

                allChecks[i].disabled = true;

            }

        }

    }

}