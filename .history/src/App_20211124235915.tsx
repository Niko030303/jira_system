import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
import { useAuth } from './context/auth-context';
import { LoginScreen } from './screens/login';
import { ProjectListScreen } from './screens/project-list';
import { UnauthenticatedApp } from './unauthenticated-app';

function App() {
const {user} = useAuth()

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
