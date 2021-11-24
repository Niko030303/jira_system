import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
import { useAuth } from './context/auth-context';
import { LoginScreen } from './screens/login';
import { ProjectListScreen } from './screens/project-list';

function App() {
const {user} = useAuth()

  return (
    <div className="App">
      {user ? <AuthenticatedApp}
    </div>
  );
}

export default App;
