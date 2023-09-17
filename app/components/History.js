import React from 'react';

export default function Status({moves}) {

    const style = {
        position: 'fixed',
        top: '0',
        right: '0',
        width: '200px',
        color: 'white',
        fontSize: '1.1em',
        textAlign: 'right',
        padding: '15px',
    }
    return (
        <div style={style}>
            <ol>
                {moves}
            </ol>
        </div>
    );
}

