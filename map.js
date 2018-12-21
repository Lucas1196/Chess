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
	let container = document.getElementsByClassName("piece-inside")[0];
	let yPawn = container.getAttribute("data-y");
	let pieceChildren = container.children;

    for (val of pieceChildren) {
        if (val.lastChild){
            break;
        }
    }
    
    var xPawn = val.getAttribute("data-x");
   
    let x = el.getAttribute("data-x");
	let parentEl = el.parentElement;
	let y = parentEl.getAttribute("data-y");

	if((parseInt(x) == parseInt(xPawn)-1 || parseInt(x) == parseInt(xPawn)+1) && (parseInt(y) == parseInt(yPawn)-1 || parseInt(y) == parseInt(yPawn)+1)) {
        let newContainer = el.parentElement.classList.add("piece-inside");
        let oldPiece = document.getElementsByClassName("pawn");
        let piece = el.appendChild(document.createElement("b"));
            piece.classList.add("pawn");
        let oldContainer = container.classList.remove("piece-inside");
    }
    else{
		console.log("It is not a good move");
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
                    e.target.style.border = "8px solid green";
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
