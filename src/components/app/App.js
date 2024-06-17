import ContentField from '../contentField/ContentField'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="logo"></div>
          <input type="text" />
        </header>
        <div className='content'>
          <h1>
            Phones
          </h1>
          <ContentField />
        </div>
      </div>
    </div>
  );
}

export default App;
