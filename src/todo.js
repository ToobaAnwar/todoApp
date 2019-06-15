import React from 'react';

const Todo = props => (
      <ul>
    {
      props.items.map((item, index) => <div>
        <li key={index}>{item}</li>
        <button onClick={() => props.deleteItem(item)}>DELETE</button>
      </div>)
    }
  </ul>
);

export default Todo;
