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
var positionX = 4;
var positionY = 3;

//Columns
for ( var y = 0; y < board.length; y++ ) { 
    var column = table.appendChild(document.createElement("div"));
        column.classList.add("column");
    //Row
    for ( var x = 0; x < board.length; x++ ) {
        var cell = column.appendChild(document.createElement("span"));
        cell.addEventListener("click", function(e) {
            console.log("try again");
        })
        determinateColor();
        //Condition for Coordonates(piece)
        if ( positionX == x && positionY == y) {
            var piece = cell.appendChild(document.createElement("b"));
                piece.classList.add("pawn");
        }
    }
}

piece.addEventListener("click", function(e) {
    e.stopPropagation();
    // e.cancelBubble = true;
    console.log("It's my piece");
    // this.style.display = "none";
})
