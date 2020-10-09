"use strict";

window.onload =function() {
    var board = document.getElementById('board')
    var squares= board.children;

    for (let i=0;i<9;i++){
        squares[i].classList.add('square');
    }
    
}