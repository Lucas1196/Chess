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

var table = document.getElementById ("table");

function determinateColor() {
    if (y % 2 == 0 && x % 2 !== 0) {
        cell.classList.add("black");
    }
    else if (y % 2 !==0 && x % 2 == 0) {
        cell.classList.add("black");
    }
    else if (y % 2 == 0 && x % 2 == 0) {
        cell.classList.add("white");
    }
    else {
        cell.classList.add("white");
    }
}

//Coordonates for Piece(DYNAMIC)
var positionX = 3;
var positionY = 0;

//Columns
for ( var y = 0; y < board.length; y++ ) { 
    var column = table.appendChild(document.createElement("div"));
        column.classList.add("column");
    //Row
    for ( var x = 0; x < board.length; x++ ) {
        var cell = column.appendChild(document.createElement("span"));
            cell.addEventListener("click", function(e) {
                if ( e.target == piece ) {
                    console.log("I am the piece");
                }
                else if ( e.target !== piece && e.target.contains(piece) ) {
                    console.log("I am the box of the piece");
                }
                else if ( !e.target.contains(piece) ) {
                    console.log("I am ready for you");
                    var newPiece = e.target.appendChild(document.createElement("b"));
                        newPiece.classList.add("pawn");
                    if ( )
                }
            })
        determinateColor();
        //Condition for Coordonates(piece)
        if ( positionX == x && positionY == y ) {
            var piece = cell.appendChild(document.createElement("b"));
                piece.classList.add("pawn");
                column.classList.add("piece-inside");
        }
    }
}

// piece.addEventListener("click", function(e) {
    // e.stopPropagation();
    // e.cancelBubble = true;
// })
