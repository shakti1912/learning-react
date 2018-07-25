
import React from 'react';
import ReactDOM from 'react-dom';

// exercise 1: Ticking Clock
function f() {
        var element = React.createElement(
            "h2",
            null,
            'The Time is: '+ new Date().toLocaleTimeString()
        );

    ReactDOM.render(element, document.getElementById('app'));
    }

setInterval(f, 1000);

// // exercise 2: Hello Dojo
var element = React.createElement(
    "h1",
    null,
    'Hello Dojo!'
);
var element2 = React.createElement(
    "h2",
    null,
    'Things I need to do'
);
var element3 = React.createElement(
    "h3",
    null,
    '* Learn React'
);
var element4 = React.createElement(
    "h3",
    null,
    '* Climb Mt Everest'
);
var element5 = React.createElement(
    "h3",
    null,
    '* Run a marathon'
);var element6 = React.createElement(
    "h3",
    null,
    '* Feed the dogs'
);
//
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));
ReactDOM.render(element3, document.getElementById('app3'));
ReactDOM.render(element4, document.getElementById('app4'));
ReactDOM.render(element5, document.getElementById('app5'));
ReactDOM.render(element6, document.getElementById('app6'));

// exercise 3 Composable squares
var Block  = (props) =>{
    return React.createElement(
        'h1',
        { style: { backgroundColor: props.backgroundColor, color : props.color,height: "300px", width: "300px", display : "inline-block"} },
        props.color + ' on ' +  props.backgroundColor);
};
//
const App = (props) => {
    return React.createElement(
        'div',
        {},
        Block({
            backgroundColor: "blue",
            color: "White"
        }),
        Block({
            backgroundColor: "red",
            color: "Blue"
        }),
        Block({
            backgroundColor: "pink",
            color: "Green"
        }),

    )
}
var e2 = React.createElement('h1', { style: { backgroundColor: 'red',color : 'Blue',height: "200px", width: "200px"} }, 'Blue on Red');
var e3 = React.createElement('h1', { style: { backgroundColor: 'pink',color : 'Green',height: "200px", width: "200px" } }, 'Green on Pink');

ReactDOM.render(<App />, document.getElementById('app'));
//


ReactDOM.render(
        <h1>This is from JSX!</h1>,
        document.getElementById('app')
    );


//exercise 4: CheckerBoard
function CheckerBoard (props) {
    var n = prompt("Please enter a number");
    var listOfRows = [];
    for(var i = 0; i < n; i++)
    {
        listOfRows.push(Row('div',{rows:n}));
    }
    return listOfRows;
}

const Row  = (props) =>  {
    // var e =  React.createElement(<Cell />, null);

        var listOfCells = [];

        for (var i = 0; i < props.rows; i++) {
            listOfCells.push(Cell);
        }

    return (
    React.createElement(
        'div',
        //{style: {display: 'inline-block'}},
        listOfCells)
    )
}

function Cell (props) {
    return React.createElement(
        'div',
        {style : {backgroundColor: 'black', height: '20px', width: '20px', display:'inline-block'}}
        );
}
// And feel free to use the following object:
var styles = {
    row: {height: '20px'},
    cell: {height: '20px', width: '20px', display:'inline-block'},
    colorA: {backgroundColor: 'black'},
    colorB: {backgroundColor: 'red'}
}


ReactDOM.render(<Row />, document.getElementById('app'));
