import './App.css';
import Dashboard from './layouts/Dashboard';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='container'>
          <Dashboard />
      </div>
    </div>
  );
}

export default App;
