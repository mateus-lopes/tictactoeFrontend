import React from 'react';

export default function Square({ value, onSquareClick }) {

    const button = {
        width: '100px',
        height: '100px',
        backgroundColor: 'transparent',
        color: 'white',
        opacity: '1',
        border: '1px solid white',
        cursor: 'pointer',
    }
    const span = {
        opacity: '1',
        fontSize: '2em',
    }

    if(value === 'X') { button.backgroundColor = '#942c2c'; }
    if(value === 'O') { button.backgroundColor = '#2c4f94'; }

    if(value === null) { 
        value = '0';
        span.opacity = '0';
    }

    return (
        <button style={button} onClick={onSquareClick}> 
            <span style={span}>
                {value} 
            </span>
        </button>
    );
}

