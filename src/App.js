import logo from './logo.svg';
import './App.css';
import Link  from './components/HelloWord';
import Input from './components/Input';
import Modal from './components/Modal';
import './index.css';

function App() {
  const modevent = () => {
alert("ola cuzao")
  }
  return (
    <div className="App">
      <header className="App-header">
   <div id='nnn' className='bg-rose-50 h-[60px] flex items-center justify-center gap-[10px]'>
<button onClick={modevent} className='bg-gray-500 w-[50px] h-[30px] rounded-[8px] border-2'>ola</button>
<button onClick={() => {}} className='bg-gray-500 w-[50px] h-[50px] rounded-[8px] border-2'>ola</button>
   </div>
      </header>
    </div>
  );
}

export default App;
