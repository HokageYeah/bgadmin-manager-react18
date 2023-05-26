import './App.css';
import Children from '@/components/ChildrenScrollList';
import logo from './logo.svg';
import ChildrenIntersectionObserver from './components/ChildrenIntersectionObserver';

function App() {
  console.log();
  const nameAry = [];
  for (let i = 0; i < 100; i++) {
    nameAry.push(i);
  }
  return (
    <div className="App">
      <Children yuye={nameAry}></Children>
      <ChildrenIntersectionObserver yuye={nameAry} height={195}></ChildrenIntersectionObserver>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
