"use strict";

window.onload =function() {
    let squares= document.querySelectorAll('#board div');

    for (let i=0;i<9;i++){
        squares[i].classList.add('square');
    }
}