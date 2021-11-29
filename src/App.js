import './App.scss';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount stock={5} />
    </div>
  );
}

export default App;