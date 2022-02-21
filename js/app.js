'use strict';
debugger
const fieldWork = document.querySelector('.field-work')
let step = 0;
let result = '';
const content = document.querySelector('.content')
const container = document.querySelector('.container')
const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
let message = document.querySelector('.message')
let player = 'X'

fieldWork.addEventListener('click', e => {
    if (e.target.className == 'box') {
        if (e.target.innerHTML && (step === 9)) {
            console.log(step)
            console.log(check());
        }
        if (e.target.innerHTML) {
            alert('cell is occupied')
            return;


        }
        else {
            // console.log(e.target)
            step % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
            step % 2 === 0 ? (message.innerHTML = " Your move Mr " + '0')
                : (message.innerHTML = " Your move Mr " + player);
            step++;
            check();
        }
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
        } else if (step === 9) {
            content.innerHTML = 'DEAD HEAT'
            container.style.display = "block";
        }

    }
}

const winResult = winner => {
    console.log(winner);
    content.innerHTML = `Win ${winner} !`;
    container.style.display = "block";
    btn.style.boxShadow = "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
}
const closeModal = () => {
    modal.style.display = "none";
    location.reload();
}
overlay.addEventListener('click', closeModal);
btn.addEventListener('click', closeModal);

