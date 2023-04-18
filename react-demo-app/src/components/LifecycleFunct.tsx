import React, { useEffect, useState } from 'react';

const LifecycleFunct: React.FC = (props) => {
    const [ label, setLabel ] = useState('this is a label in the state');
    const [ label2, setLabel2 ] = useState('this is a label 2 in the state');

    useEffect(() => {
        console.log("[Lifecycle Funct] Component did mount (ALONE)");
        // chiamata alle API
    }, []);

    useEffect(() => {
        console.log("[Lifecycle Funct] label changed ...");
    }, [ label ]);
 
    useEffect(() => {
        console.log("[Lifecycle Funct] Component did mount + did update.");

        return () => console.log("[Lifecycle Funct] Component will unmount");
    });

    return(<React.Fragment>
        <h1>Lifecycle Methods (Funct)</h1>
        <button onClick={ () => setLabel('Post click change') }>Change State</button>
        <button onClick={ () => setLabel2('Post click change 2') }>Change State 2</button>
    </React.Fragment>);
}

export default LifecycleFunct;