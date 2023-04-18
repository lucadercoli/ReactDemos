import React, { CSSProperties } from 'react';

const NotFound: React.FC = (props) => {
    const viewStyle: CSSProperties = { 
        border: "4px solid darkred", 
        backgroundColor: "darkred", 
        color: "white",
        fontWeight: "bold",
        textAlign: "center" 
    };
    
    return(<div style={ viewStyle }>
        <h1>OOOOOOOOPS, wrong page ...</h1>
    </div>);
}

export default NotFound;