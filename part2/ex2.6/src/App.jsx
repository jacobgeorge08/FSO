import { useState } from "react";

const Persons = ({ persons }) => {
  const mappedPersons = persons.map((p) => {
    return (
      <div key={p.name}>
        {p.name} {p.number}
      </div>
    );
  });
  return <>{mappedPersons}</>;
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "007" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const found = persons.find((p) => {
      return p.name === newName && p.number === newNumber;
    });

    if (found) {
      alert(`${newName} already exists in the phone book`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
      <div>
        DEBUG: Name {newName} Number {newNumber}
      </div>
    </div>
  );
};

export default App;
