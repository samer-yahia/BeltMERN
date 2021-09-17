import './App.css';
import Disp from './components/Disp';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>MERN Belt Exam</h1>

      <Switch>

        {/* === Create a Pirate === */}
        <Route exact path="/pirates/new">
          <Create />
        </Route>

        {/* === View One Pirate === */}
        <Route exact path="/pirates/:id">
          <ViewOne />
        </Route>

        {/* === Dashboard of Pirates ===*/}
        <Route exact path="/pirates">
          <Disp />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
