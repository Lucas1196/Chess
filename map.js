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
    if ( y % 2 == 0 && x % 2 != 0 ) {
        cell.classList.add("black");
    }
    else if ( y % 2 != 0 && x % 2 == 0 ) {
        cell.classList.add("black");    
    }
    else {
        cell.classList.add("white");
    }
}

var positionX = 4;
var positionY = 2;

function legalMove(el) {

    // debugger
	var container = document.getElementsByClassName("piece-inside")[0];
	var yPawn = container.getAttribute("data-y");
	var pieceChildren = container.children;

    for (val of pieceChildren) {
        if (val.firstChild) {
            break;
        }
    }

    var xPawn = val.getAttribute("data-x");

    var x = el.getAttribute("data-x");
	var parentEl = el.parentElement;
    var y = parentEl.getAttribute("data-y");

	if((parseInt(x) == parseInt(xPawn)-1 || parseInt(x) == parseInt(xPawn)+1) && (parseInt(y) == parseInt(yPawn)-1 || parseInt(y) == parseInt(yPawn)+1)) {
        let newContainer = el.parentElement.classList.add("piece-inside");
        let oldContainer = container.classList.remove("piece-inside");
        let newpiece = el.appendChild(document.createElement("b"));
            newpiece.classList.add("pawn");
            piece.remove();
            piece = newpiece;
    }
    else {
		console.log("Nu e o mutare buna!");
    }

}


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
                else if ( e.target !== piece && e.target.contains(piece) ) {
                    console.log("I am the cell with piece");
                    return;
                }
                else if ( !e.target.contains(piece) ) {
                    legalMove(this);
                }
                
            })
        determinateColor();
        if ( positionX == x && positionY == y ) {
            var piece = cell.appendChild(document.createElement("b"));
                piece.classList.add("pawn");
                column.classList.add("piece-inside");
        }
    }
}
