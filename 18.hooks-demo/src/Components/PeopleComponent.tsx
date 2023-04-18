import React, { useReducer } from 'react'

interface Person {
    name: string;
    alive: boolean;
}

const people: Person[] = [
    { name: "Roberto", alive: true },
    { name: "Paolo", alive: true },
    { name: "Giovanni", alive: true },
    { name: "Luca", alive: true }
];

const peopleReducer = (people: Person[], action: any) => {
    switch(action.type) {
        case "die": {
            return people.map( person => {
                if(person.name == action.payload) {
                    person.alive = false;
                }
                return person;
            });
        }

        case "revive": {
            return people.map( person => {
                if(person.name == action.payload) {
                    person.alive = true;
                }
                return person;
            });
        }

        default: 
            return people;
    }
}


export default function PeopleComponent() {
    const [state, dispatch] = useReducer(peopleReducer, people);

    const boxStyle = { backgroundColor: "lightgray", border: "3px solid orange", color: "black", padding: "5px", margin: "5px" };

    const toggleLife = (person: Person) => {
        if(person.alive)
            dispatch({ type:"die", payload: person.name });
        else
            dispatch({ type:"revive", payload: person.name });
    }

    return (
        <div>
            {
                state.map((item: Person, idx: number) => (
                    <div key={idx} style={boxStyle}>
                        <div>{item.name}</div>
                        <div>{ item.alive ? "VIVO!" : "SIGH :(" }</div>
                        <button onClick={() => toggleLife(item)}>Cambia</button>
                    </div>
                ))
            }
        </div>
    )
}
