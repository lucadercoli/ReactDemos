import React from 'react';
import { Trans } from 'react-i18next';

export default function TransComponent () {
    const style = {
        margin: "0 0 5px 0", 
        border: "2px dashed darkred",
        backgroundColor: "crimson"
    };

    return (<div style={style}>
        <Trans><h1>Welcome to React</h1></Trans>
        <Trans><h2>Have a nice day</h2></Trans>
        </div>)
}

// the translation in this case should be
