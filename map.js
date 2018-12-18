var board = [ 
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1]
];

var table = document.getElementById ("table");

function determinateColor() {
    if (y % 2 == 0 && x % 2 != 0) {
        cell.classList.add("black");
    }
    else if (y % 2 != 0 && x % 2 == 0) {
        cell.classList.add("black");
    }
    // else if (y % 2 == 0 && x % 2 == 0) {
    //     cell.classList.add("white");
    // }
    else {
        cell.classList.add("white");
    }
}


    let positionX = 3;
    let positionY = 2;   



//Columns
for ( var y = 0; y < board.length; y++ ) { 
    var column = table.appendChild(document.createElement("div"));
        column.classList.add("column");
        column.dataset.y = y;
    //Cell
    for ( var x = 0; x < board.length; x++ ) {
        var cell = column.appendChild(document.createElement("span"));
            cell.dataset.x = x;
            cell.addEventListener("click", function(e) {
                if ( e.target == piece ) {
                    console.log("I am the piece");
                    return;
                }
                else if ( !e.target.contains(piece) ) {
                    console.log("I am the cell without piece");
                    move();
                    return;
                }
            })
            if ( positionX == x && positionY == y ) {
                var piece = cell.appendChild(document.createElement("b"));
                    piece.classList.add("pawn");
                    column.classList.add("piece-inside");
                    // console.log(document.getElementsByClassName("piece-inside"));
            }
            determinateColor();
            position();
    }
}


// else if ( e.target !== piece && e.target.contains(piece) ) {
//     console.log("I am the cell with piece");
//     // console.log(e.target);
//     return;
// }

// else if ( e.target.offsetParent.previousSibling.classList.contains("piece-inside") || e.target.offsetParent.nextSibling.classList.contains("piece-inside") && !e.target.contains(piece) ) {
//     this.offsetParent.previousSibling.classList.remove("piece-inside");
//     this.offsetParent.classList.add("piece-inside");
//     var piece = e.target.appendChild(document.createElement("b"));
//         piece.classList.add("pawn");
//         console.log("I am the cell without piece");
// }
