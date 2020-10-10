"use strict";

function Main(){

	
    var board = Array(9); // Squares on the board
    var button = document.querySelector("button");
    
    var divide=document.querySelector('#board');
    var status=document.querySelector('#status');
    var move = "X";// "X" always starts first
    
    //The below code determines the possible combinations for a winner to be chosen
    var combinationForWin = new Array(
        [0, 1, 2], // first row across "X,X,X" or "O,O,O"
        [3, 4, 5], // second row across "X,X,X" or "O,O,O"
        [6, 7, 8], // third row across "X,X,X" or "O,O,O"
        [0, 3, 6], // first column down "X,X,X" or "O,O,O"
        [1, 4, 7], // second column down "X,X,X" or "O,O,O"
        [2, 5, 8], // third column down "X,X,X" or "O,O,O"
        [0, 4, 8], // diagonal starting at first square "X,X,X" or "O,O,O"
        [2, 4, 6]); // diagonal starting at third square "X,X,X" or "O,O,O"
    
    for(let i=0; i<divide.children.length; i++){
    divide.children[i].id=i.toString();  // This line applies Identifiers to each square on the board so that they can be targeted accordingly
    
    }
    
    for(let i=0; i<divide.children.length; i++){
    
    divide.children[i].classList.add("square");  
    divide.children[i].onclick=function(){
        
        
        if(fair(this.id,board)){
        console.log()
    
        }
        
        else{
    
    if (move==="X"||move==="x"){
            board[this.id]="X";
            this.innerHTML = "<strong>X<strong>";
            this.classList.remove('O','X');
            this.classList.add('X');
            var champion = win(board,combinationForWin,"X"); // "X" wins
            if (champion == true){
                status.innerHTML="<strong>Congratulations! X is the Winner!<strong>" // displays Winner 
                status.classList.add('you-won');
                }
            move="O";
    }
    else{
        board[this.id]="O";
        this.innerHTML = "<strong>O<strong>";
        this.classList.remove('O','X');
        this.classList.add('O');
        var champion = win(board,combinationForWin,"O"); // "O" wins
        if (champion == true){
                status.innerHTML="<strong>Congratulations! O is the Winner!<strong>" // displays Winner 
                status.classList.add('you-won');
    
            }
            
        move="X";
    
    }
        
    
    }	
    }
    // This block of code changes the look of each square when the mouse hovers over it (Exercise 3)
    divide.children[i].addEventListener('mouseover',function(){
    this.classList.add('hover');
    
    });
    divide.children[i].addEventListener('mouseout',function(){
    this.classList.remove('hover');
    
    }); 
           
    }
    
     
     button.onclick= function(){
     window.location.reload();
    Main();
    }
    
    function win(brd,CFW,move){
        for(let i=0; i<CFW.length; i++){
            if (brd[CFW[i][0]]===move && brd[CFW[i][1]]===move && brd[CFW[i][2]]=== move){
                return true;
                
        }
    }
    }
    // This block of code ensures fairplay
    function fair (id,board) {
        for (let i=0; i<board.length; i++) {
            if (board[id]==='X' || board[id] ==='O'){
                return true;
            }
        }
    return false;
    }
    
    
    }
    document.addEventListener("DOMContentLoaded",Main);