import Header from './components/header';
import './App.css';
import Main from './components/main';
// import { useEffect } from 'react';

function App() {

  return (
    <div className="App min-h-screen flex items-center bg-orange-100 justify-center flex-col w-full">
      <Header title="Grocery List" />
      <Main />
    </div>
  );
}

export default App;
