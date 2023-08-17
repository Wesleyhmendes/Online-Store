import './App.css';
import SearchContainer from './components/SearchContaienr/SearchContainer';

function App() {
  return (
    <>
      <SearchContainer />
      <h1 className="title" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    </>
  );
}

export default App;
