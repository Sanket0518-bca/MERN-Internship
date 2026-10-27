import UserList from './components/UserList';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="container">
        <UserList />
        <Posts />
      </main>

      <footer className="footer">
        Week 3 - Day 4 | React useEffect & API Fetching
      </footer>
    </div>
  );
}

export default App;
