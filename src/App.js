import React from 'react';
import './css/style.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router} from 'react-router-dom'
import Page from './pages/Page'

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Navigation />
      </header>
      <div className="Pages">
      <Page />
      </div>
    </div>
    </Router>
  );
}

export default App;
