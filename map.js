// const column = React.createElement('div', { className: 'column' }, cell);
// const cell   = React.createElement('span', { className: '' }, '');

// const column = React.createElement('div', { className: 'column' },
//                React.createElement('span', { className: ' ' }, ''),
// );
let positionX = 4;
let positionY = 2;

class Table extends React.Component {

    createTable = () => {

    let columns = [];
    // Outer loop to create parent
    for (let y = 0; y < 8; y++) {
        let cells = [];
            //Inner loop to create children
            for (let x = 0; x < 8; x++) {
                if ( y % 2 == 0 && x % 2 != 0 ) {
                    cells.push(<span className = "white" key = {x}></span>)
                }
                else if ( y % 2 != 0 && x % 2 == 0 ) {
                    cells.push(<span className = "white" key = {x}></span>)
                }
                else {
                    cells.push(<span className = "black" key = {x}></span>)
                }
                if ( positionX == x && positionY == y ) {
                    let piece = document.createElement("b");
                        piece.className = 'pawn';
                    let column = this.className = 'piece-inside';
                }
            }
            //Create the parent and add the children
            columns.push(<div className = "column" key = {y}>{cells}</div>)
        }
        return columns
    }
    
    render() {
        return(
            <div className = "inner-table">
                {this.createTable()}
            </div>
        )
    }
}

ReactDOM.render(<Table />, document.getElementById('table'));
