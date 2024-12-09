import React from 'react';
import { Todo } from '../types/Todo';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
