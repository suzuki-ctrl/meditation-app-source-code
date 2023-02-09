import './App.css';
import Meditation from './components/Meditation';
import StartButton from './components/StartButton';
import ToggleProvider from './context/TogContext';


function App() {

  return (
    <ToggleProvider>
    <div className="App">
      <h1>瞑想アプリ</h1>
      <Meditation />
      <StartButton />
    </div>
    </ToggleProvider>
  );
}

export default App;