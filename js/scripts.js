function check(id, value) {

    let todasLabels = document.querySelectorAll('.label-radio');
    let clickedLabel = document.querySelector('#'+id+'_label');

    for (i = 0; i < todasLabels.length; i++) {
        todasLabels[i].style.background = 'rgb(173, 192, 196)';
    }

    clickedLabel.style.background = 'rgb(32, 152, 105)';

}