import React, { useState } from 'react'
import useInput from './useInput';

const HooksForm = () => {
    //const [name, setName] = useState("");
    //const { value, bind, reset } = useInput('');
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    
    const handleSubmit = (evt: any) => {
        // evt.preventDefault();
        // alert(`Submitting Name ${name}`);

        // evt.preventDefault();
        // alert(`Submitting Name ${value}`);
        // reset();

        evt.preventDefault();
        alert(`Submitting Name ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <h1>Hooks Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" {...bindFirstName} />
                    {/* <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} /> */}
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" {...bindLastName} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HooksForm;