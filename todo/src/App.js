import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNew from '../src/components/addNew'
import TodoList from '../src/components/list';


function App() {
  return (
    <div className="App">
      <TodoList/>
      <AddNew />
      
    </div>
  );
}

export default App;
