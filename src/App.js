import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      name="Jane"
      lastName="Doe"
      age={45}
      hairColor="Black"
      />
      <PersonCard
      name="John"
      lastName="Smith"
      age={88}
      hairColor="Brown"
      />
      <PersonCard
      name="Millard"
      lastName="Fillmore"
      age={50}
      hairColor="Brown"
      />
      <PersonCard
      name="Maria"
      lastName="Smith"
      age={62}
      hairColor="Brown"
      />
    </div>
  );
}

export default App;
