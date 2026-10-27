import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="app-container">
      <div className="content-card">
        <h1>Welcome to My First React App!</h1>

        <p>This app is built using React 19</p>

        <Hello />

        <p className="internship">
          MERN Full Stack Internship Program
        </p>
      </div>
    </div>
  );
}

export default App;
