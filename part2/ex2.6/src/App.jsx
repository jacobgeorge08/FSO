import { useState } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";

import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((res) => {
      console.log("Promise fulfilled");
      setPersons(res.data);
    });
  };

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName === "" || newNumber === "") {
      alert(`Enter a valid name + number`);
    } else {
      const found = persons.find((p) => {
        return p.name === newName && p.number === newNumber;
      });

      if (found) {
        alert(`${newName} already exists in the phone book`);
      } else {
        setPersons([
          ...persons,
          { name: newName, number: newNumber, id: persons.length + 1 },
        ]);
      }
    }
    setNewName("");
    setNewNumber("");
  };

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter shown with : " handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
