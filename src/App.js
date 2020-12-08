import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Header } from './components/Header';

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
    </div>
  );
}

export default App;
