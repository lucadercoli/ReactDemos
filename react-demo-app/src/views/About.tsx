import React, { CSSProperties } from 'react';

const About: React.FC = (props) => {
    const viewStyle: CSSProperties = { border: "2px solid darkgreen" };
    return(<div style={ viewStyle }><h1>About me ...</h1></div>);
}

export default About;