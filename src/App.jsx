import './App.scss';
import Feature from './components/Feature/Feature';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <ItemListContainer />
      
    </div>
  );
}

export default App;