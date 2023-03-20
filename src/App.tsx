import './App.css';
import { Search } from './features/search/Search';
import { List } from './features/list/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <List />
      </header>
    </div>
  );
}

export default App;
