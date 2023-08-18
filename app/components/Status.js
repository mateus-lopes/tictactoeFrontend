import React from 'react';

export default function Status({value}) {

    const title = {
        color: 'white',
        fontSize: '1.1em',
        textAlign: 'center',
        padding: '20px',
        textTransform: 'uppercase',
    }
    return (
        <div style={title}>{value}</div>
    );
}

