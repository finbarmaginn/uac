import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

import { Header } from './components/Header';
import { Footer } from './components/Footer';


import { Home } from './pages/Home/index';
import { About } from './pages/About/index';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path='/default' render={() => <Redirect to= "/" />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
