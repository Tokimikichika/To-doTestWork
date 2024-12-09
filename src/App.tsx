import React, { useState } from 'react';
import TodoInput from './components/TodoInput.tsx';
import TodoList from './components/TodoList.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Тестовое задание', completed: false },
    { id: 2, text: 'Прекрасный код', completed: true },
    { id: 3, text: 'Покрытие тестами', completed: false },
  ]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="todo-container">
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
        <Footer
          todos={todos}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default App;
