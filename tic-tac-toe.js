"use strict";

window.onload =function() {
    let squares= document.querySelectorAll('#board div');
    var boardstate=["","","","","","","",""];
    var wnr;

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
                boardstate[i]=box.textContent;
                prev='X';
    
            }else{
                box.textContent="O";
                box.classList.add('O');
                boardstate[i]=box.textContent;
                prev='O';
            }
            
            if ((boardstate[1]=='X' && boardstate[2]=='X' && boardstate[0]=='X')||(boardstate[1]=='O' && boardstate[2]=='O' && boardstate[0]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[1];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[1]=='X' && boardstate[4]=='X' && boardstate[7]=='X')||(boardstate[1]=='O' && boardstate[4]=='O' && boardstate[7]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[1];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[2]=='X' && boardstate[5]=='X' && boardstate[8]=='X')||(boardstate[2]=='O' && boardstate[5]=='O' && boardstate[8]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[2];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[4]=='X' && boardstate[5]=='X' && boardstate[3]=='X')||(boardstate[4]=='O' && boardstate[5]=='O' && boardstate[3]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[4];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[7]=='X' && boardstate[8]=='X' && boardstate[6]=='X')||(boardstate[7]=='O' && boardstate[8]=='O' && boardstate[6]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[7];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[0]=='X' && boardstate[4]=='X' && boardstate[8]=='X')||(boardstate[0]=='O' && boardstate[4]=='O' && boardstate[8]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[0];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[3]=='X' && boardstate[6]=='X' && boardstate[0]=='X')||(boardstate[3]=='O' && boardstate[6]=='O' && boardstate[0]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[3];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }

            if ((boardstate[2]=='X' && boardstate[4]=='X' && boardstate[6]=='X')||(boardstate[2]=='O' && boardstate[4]=='O' && boardstate[6]=='O')){
                wnr=document.getElementById('status');
                let w =boardstate[2];
                wnr.textContent="Congratulations! "+w+" is the Winner!";
                wnr.classList.add('you-won');
            }
        });
    });
}