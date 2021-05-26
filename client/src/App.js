import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Create from './views/Create';
import { Router } from "@reach/router";
import SinglePirate from './views/SinglePirate';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/" />
          <Create path="/new" />
          <SinglePirate path="/pirate/:_id" />
          <Edit path="/pirate/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
