import React from 'react'


const Todos = (props) => {
    return (
      <div>
      {todos.map((todo) => {
      
        return <TodoItem key={todo.id} todo={todo} />
      })}
      </div>
    )
  }
  
  export default Todos