function check(id, value) {

    let todasLabels = document.querySelectorAll('.label-radio');
    let clickedLabel = document.querySelector('#'+id+'_label');
    let valorAposta = document.querySelector('#valor');

    for (i = 0; i < todasLabels.length; i++) {
        todasLabels[i].style.background = 'rgb(173, 192, 196)';
    }

    clickedLabel.style.background = 'rgb(32, 152, 105)';


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