import { useState } from "react";

const Persons = ({ persons }) => {
  const mappedPersons = persons.map((p) => {
    return <p key={p.name}>{p.name}</p>;
  });
  return <>{mappedPersons}</>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPersons([...persons, { name: newName }]);
  };
  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
