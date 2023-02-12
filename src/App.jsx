import './App.css';
import Filters from './components/Filters';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <div className="card">
                <h1>Todo App</h1>
                <Filters />
                <hr />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
