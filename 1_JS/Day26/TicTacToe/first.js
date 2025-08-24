// let turn="O";

// let winner=[
//     [0,1,2],[3,4,5],[6,7,8],
//     [0,3,6],[1,4,7],[2,5,8],
//     [0,4,8],[2,4,6]
// ]

// let board_array=new Array(9).fill("E");


// function checkWinner(){
//     for(let [index0,index1,index2] of winner){
//         if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2]&&board_array[index0]===board_array[index2]){
//             return 1;
//         }
//     }
//     return 0;
// }
 
// let total_Turn=0;

// const printer= (event)=>{
//       const element=event.target;

//       if(board_array[element.id]==='E')
//     {   // count the turn
//         total_Turn++;
//       if(turn==='O'){
//         element.innerHTML="O";

//         board_array[element.id]="O";
//         // console.log (board_array);
//         if(checkWinner()){
//             document.getElementById('winningMessage').innerHTML="Winner is O";
//             board.removeEventListener('click',printer);
//             return;
//         }
//         turn="X";
        

//       }
//       else{
//         element.innerHTML="X";
//         board_array[element.id]="X";
//         if(checkWinner()){
//             document.getElementById('winningMessage').innerHTML="Winner is X";
//            board.removeEventListener('click',printer);
//            return;
//         }
//         turn="O";
//       }
//       if(total_Turn==9){
//       document.getElementById('winningMessage').innerHTML="Match is draw";       
//       }


//     } }

// const board=document.querySelector('.board');
// board.addEventListener('click',printer)


// // use of restart 
// const restart= document.getElementById('restartButton');
// restart.addEventListener('click',()=>{
//    const cell= document.getElementsByClassName("cell");
//     Array.from(cell).forEach((value)=>{
//         value.innerHTML="";
//     })

//     turn="O";
//     total_Turn=0;
//     board_array=new Array(9).fill("E");
//     document.getElementById('winningMessage').innerHTML="";
//     board.addEventListener('click',printer);
// })


// my js code  

let turn="O";

let board_array=new Array(9).fill("E");

let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let total_Turn=0;
const winningMessage=document.getElementById("winningMessage");

let player1=document.querySelector(".container1")
let player2=document.querySelector(".container2")
const printer=(event)=>{
    let element=event.target;
    let index=element.id;
    if(board_array[index]=="E"){
        total_Turn++;
        if(turn=="O"){
            element.innerHTML="O";
            turn="X";
            board_array[index]="O";

             player1.style.height="450px"
            player1.style.width = "450px"

            player2.style.height="350px"
            player2.style.width = "350px"
            // check for winner
            if(checkWinner()){
                winningMessage.innerHTML="O is the winner";
                board.removeEventListener('click',printer);
            }
        }
        else{
        element.innerHTML="X";
        turn="O";
        board_array[index]="X";


        player2.style.height="450px"
            player2.style.width = "450px"

            player1.style.height="350px"
            player1.style.width = "350px"
            if(checkWinner()){
                winningMessage.innerHTML="X is the winner";
                board.removeEventListener('click',printer);

            }
        }
    }

    if(total_Turn===9){
      winningMessage.innerHTML="Match Draw";  
    }
}

function checkWinner(){
    for(let [idx1,idx2,idx3] of winner){
        if(board_array[idx1]!="E"&&board_array[idx1]==board_array[idx2]&&board_array[idx2]==board_array[idx3]&&board_array[idx1]==board_array[idx3]){
            return 1;
        }
    }
    return 0;
} 
const board=document.querySelector(".board");
board.addEventListener('click',printer);


// restart button use

const restart=document.getElementById("restartButton");
restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName("cell");
    Array.from(cell).forEach(element => {
        element.innerHTML="";
    });

    turn="O";
    total_Turn=0;
    board_array=new Array(9).fill("E")
    winningMessage.innerHTML="";
    board.addEventListener('click',printer);


    player1.style.height="400px"
            player1.style.width = "400px"

            player2.style.height="400px"
            player2.style.width = "400px"

})
