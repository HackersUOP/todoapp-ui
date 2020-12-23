import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Todos from './components/TodoList';
import ViewTodo from './components/ViewTodo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Todos}/>
          <Route path="/about" exact component={About}/>
          <Route path="/todos/:id" exact component={ViewTodo}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
