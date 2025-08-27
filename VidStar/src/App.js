//import css
import './App.css';

//import necessary 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//import routes
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import Footer from './componenets/Footer';

function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/login" exact component={Login} />
           <Route path="/signup" exact component={SignUp} />
           <Route path="/dashboard" exact component={Dashboard} />
         </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
