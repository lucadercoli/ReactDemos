import Todo from "./Todo"

export const generateID = (): string => {
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}

// let todos : Todo[] = [
//     new Todo( generateID(), 'Write React Hooks book', true ),
//     new Todo( generateID(), 'Promote book', false ),
//     new Todo( generateID(), 'Wash my wife car', false )
// ];

export const fetchAPITodos = (): Promise<Todo[]> =>
    new Promise((resolve) =>
        setTimeout(() => resolve([
            new Todo( generateID(), 'Write React Hooks book', true ),
            new Todo( generateID(), 'Promote book', false ),
            new Todo( generateID(), 'Wash my wife car', false )
        ] as Todo[]), 1000)
    )