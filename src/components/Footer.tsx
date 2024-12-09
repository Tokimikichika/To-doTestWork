import React from 'react';
import { Todo } from '../types/Todo';

interface FooterProps {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ todos, filter, setFilter, clearCompleted }) => {
  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="footer">
      <span>{activeTodos} items left</span>
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default Footer;
