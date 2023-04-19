import React from 'react';

// the render prop
import { Translation } from 'react-i18next';

export default function RenderPropComponent () {
    const style = {
        margin: "0 0 10px 0", 
        border: "3px solid green", 
        backgroundColor: "lightgreen"
    };

    return (
        <Translation>
        {
            t => <div style={style}><h1>{t('func-name')}</h1></div>
        }
        </Translation>
    )
}
