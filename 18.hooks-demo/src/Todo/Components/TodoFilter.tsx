import React from 'react'

interface TodoFilterItemProps {
  name: string;
  filterTodos: any;
  filter: string;
}

function TodoFilterItem(props: TodoFilterItemProps) {
    const handleFilter = () => {
        const { name, filterTodos } = props
        filterTodos(name)
    }

    const { name, filter = 'all' } = props
    const style = {
      color: 'blue',
      cursor: 'pointer',
      fontWeight: (filter === name) ? 'bold' : 'normal'
    } as any

    return <span style={style} onClick={handleFilter}>{name}</span>
}

interface TodoFilterProps {
  filter: string;
  filterTodos: (filter: string | null) => void;
}

export default function TodoFilter(props: TodoFilterProps) {
    return (
        <div>
        <TodoFilterItem {...props} name="all" />{' / '}
        <TodoFilterItem {...props} name="active" />{' / '}
        <TodoFilterItem {...props} name="completed" />
      </div>
    )
}