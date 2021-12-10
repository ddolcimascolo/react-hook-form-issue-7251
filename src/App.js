import logo from './logo.svg';
import './App.css';

import { useForm } from 'react-hook-form'

function App() {
  const { register } = useForm();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <form>
          <input {...register('myField')} />
        </form>
      </div>
    </div>
  );
}

export default App;
