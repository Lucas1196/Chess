// for ( var i = 0; i < 8; i++ ) {
//     var column = test.appendChild(document.createElement("div"));
//         column.classList.add("column");
    
//     if ( (i % 2 ) == 0 ) {
//         for ( var j = 0; j < 8; j++ ) {
//             var black = column.appendChild(document.createElement("span"));
//             var ball  = black.appendChild(document.createElement("b"));
//             if ( ( j % 2 ) == 0 ) {
//                 black.classList.add("white-span");
//                 ball.classList.add("pawn", "black");
//             }
//             else {
//                 black.classList.add("black-span");
//                 ball.classList.add("pawn", "white");
//             }
//         } 
//     }
//     else {
//         for ( var j = 0; j < 8; j++ ) {
//             var black = column.appendChild(document.createElement("span"));
//             var ball  = black.appendChild(document.createElement("b"));
//             if ( ( j % 2 ) == 0 ) {
//                 black.classList.add("black-span");
//                 ball.classList.add("pawn", "white");
//             }
//             else {
//                 black.classList.add("white-span");
//                 ball.classList .add("pawn", "black");
//             }
//         }
//     }
//  }

var board = [ 
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ','2',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ','w',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['s',' ',' ',' ',' ',' ',' ','w'],
    ['s',' ',' ',' ',' ',' ',' ','w']
];

var positionX = 8;
var positionY = 8;

var table = document.getElementById("table");


function forDivision() {
    if ( y % 2 === 0 ) {

    } 
    else if ( y % 2 !== 0 )  {
        
    }
    else if ( y % 2 ) {

    }
    else {
        
    }
}


for ( var y = 0; y < board.length; y++ ) { 
    var column = table.appendChild(document.createElement("div"));
        column.classList.add("column");
    for ( var x = 0; x < board.length; x++ ) {
        var cell = column.appendChild(document.createElement("span"));
            cell.appendChild(document.createElement("b"));
    }
}


// var board = [ 
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ','2',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ','w',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     ['s',' ',' ',' ',' ',' ',' ','w'],
//     ['s',' ',' ',' ',' ',' ',' ','w']
// ];

// console.log(board.join('\n'));

// var table = document.getElementById("table");

// for ( var i = 0; i < board.length; i++ ) { 
//     var column = table.appendChild(document.createElement("div"));
//         column.classList.add("column");
//     for ( var j = 0; j < board.length; j++ ) {
//         var row = column.appendChild(document.createElement("span"));
//             row.classList.add("has-element");
//         var ball  = row.appendChild(document.createElement("b"));
//             ball.classList.add("pawn");
//     }
// }
