"use strict";

window.onload =function() {
    let squares= document.querySelectorAll('#board div');
    var boardstate=["","","","","","","",""];

    for (let i=0;i<9;i++){
        squares[i].classList.add('square');
    }   
    var prev ='O';
    (document.querySelectorAll('.square')).forEach(function(box,i){
        
        box.addEventListener('mouseover',function(hov) {
            hov.target.classList.add('hover');
        });

        box.addEventListener('mouseout',function(hov) {
            hov.target.classList.remove('hover');
        });

        box.addEventListener('click',function(){
            
            if(prev=='O'){
                box.textContent="X";
                box.classList.add('X');
                prev='X';
            }else{
                box.textContent="O";
                box.classList.add('O');
                prev='O';
            }
            boardstate[i]=box.textContent;

        });
    });
}