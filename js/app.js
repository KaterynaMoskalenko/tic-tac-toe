'use strict';

const fieldWork = document.querySelector('.field-work')
let step = 0;
let result = '';
fieldWork.addEventListener('click', e => {
    if (e.target.className == 'box') {
        // console.log(e.target)
        step % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
        step++;
        check();
    }
})

const check = () => {
    const allBoxes = document.getElementsByClassName('box');
    // console.log(allBoxes)
    const arrWin = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < arrWin.length; i++) {
        if (
            allBoxes[arrWin[i][0]].innerHTML == 'x' && allBoxes[arrWin[i][1]].innerHTML == 'x' && allBoxes[arrWin[i][2]].innerHTML == 'x'
        ) {
            result = 'crosses';
            winResult(result);
        } else if (
            allBoxes[arrWin[i][0]].innerHTML == '0' && allBoxes[arrWin[i][1]].innerHTML == '0' && allBoxes[arrWin[i][2]].innerHTML == '0'
        ) {
            result = 'noughts';
            winResult(result);
        }
    }
}

const winResult = winner => {
    console.log(winner);
}