import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
import { LoginScreen } from './screens/login';
import { ProjectListScreen } from './screens/project-list';

function App() {
const {user} = useAuth()

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
