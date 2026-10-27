import Header from './components/Header';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      name: 'Raja',
      role: 'Frontend Developer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Priya',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Vedand',
      role: 'React Developer',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="welcome-section">
          <h2>Welcome to My React App!</h2>
          <p>This is my first modular React layout.</p>
          <p>
            I am learning React components, props and dynamic rendering.
          </p>
        </section>

        <section className="learning-section">
          <h2>Task 2: Greeting with Props</h2>

          <div className="greeting-container">
            <Greeting
              name="Priya"
              topic="React Components"
            />

            <Greeting
              name="Rohan"
              topic="JSX & Props"
            />
          </div>
        </section>

        <section className="profiles-section">
          <h2>Task 3: Our Team Profiles</h2>
          <p className="section-description">
            These profile cards are rendered dynamically using map().
          </p>

          <div className="profile-container">
            {users.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                role={user.role}
                image={user.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
