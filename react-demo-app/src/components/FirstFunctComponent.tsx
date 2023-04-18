import React from 'react';
import { RefactorTriggerReason } from 'typescript';

interface IFirstFuncComponentProps {
    message: string;
    onMessageAck: (data: string) => void;
}

const FirstFuncComponent: React.FC<IFirstFuncComponentProps> = (props): JSX.Element => {
    const handleButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        props.onMessageAck("Arrivo dal funct component");
    };

    return(<h1>
        {props.message} from FirstFunctComponent&nbsp;
        <button onClick={ handleButtonClick }>Ok</button>
    </h1>);
}

export default FirstFuncComponent;