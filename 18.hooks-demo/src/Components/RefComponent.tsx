import React, { useRef } from 'react'
import { useHover } from 'react-hookedup'

export default function RefComponent() {
    //firstNameRef: HTMLInputElement | null = null;
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);

    const {hovered, bind} = useHover();

    const divStyle = {
        border: "1px solid navy",
        backgroundColor: "white",
        padding: "5px",
        margin: "5px",
        color: "navy",
        width: "400px"
    };

    const toggle = (focusOnFirstName: boolean) => {
        const first = firstNameRef.current;
        const last = lastNameRef.current;

        if(first && last)
           focusOnFirstName ? first.focus() : last.focus();
    }

    return (
        <div style={divStyle}>
            <div>DOM REFs</div>
            <div>
                <div>First Name is { hovered ? "Hovering" : "Not hovering"}</div>
                <input type="text" placeholder="First name" ref={firstNameRef} {...bind}/>
                <input type="text" placeholder="Last name" ref={lastNameRef} />
            </div>
            <div>
            <button onClick={() => toggle(true)}>Focus on First Name</button>&nbsp;|&nbsp;                
            <button onClick={() => toggle(false)}>Focus on Last Name</button>
            </div>
        </div>
    )
}
