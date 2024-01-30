import { useState } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import personService from "./services/persons";
import { useEffect } from "react";
import "./styles.css";

const Notification = ({ message, deleteContact }) => {
  if (message === null) {
    return null;
  } else {
    return (
      <div className={deleteContact === false ? "notification" : "deleteNoti"}>
        {message}
      </div>
    );
  }
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState(null);
  const [deleteContact, setDeleteContact] = useState(false);

  const hook = () => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
    console.log("rendered");
  };

  useEffect(hook, []);

  const handleDelete = (id) => {
    const deleteName = persons.find((p) => p.id === id).name;
    if (window.confirm("Are you sure you want to delete " + deleteName + "?")) {
      personService.deletePerson(id);
      setPersons(persons.filter((p) => p.id !== id));
    } else {
      console.log(`delete cancelled`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const found = persons.find((p) => {
      return p.name === newName;
    });

    if (found) {
      if (window.confirm("Are you sure you want to edit " + found.name + "?")) {
        const editedPerson = { ...found, number: newNumber };

        personService
          .updatePerson(editedPerson, editedPerson.id)
          .then(() => {
            setNotification(`${editedPerson.name}'s number was edited`);
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
            setDeleteContact(true);
            setNotification(
              `${editedPerson.name} was already deleted from the database`
            );
            setTimeout(() => {
              setNotification(null);
              setDeleteContact(false);
            }, 5000);
            setPersons(persons.filter((p) => p.id !== editedPerson.id));
          });

        setPersons(
          persons.map((p) => (p.id === editedPerson.id ? editedPerson : p))
        );
      } else {
        console.log(`Update cancelled`);
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: String(Math.floor(Math.random() * 100000)),
      };

      personService
        .createPerson(newPerson)
        .then((response) => setPersons(persons.concat(response)))
        .then(() => {
          setNotification(`${newPerson.name}'s number was added`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
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
      <Notification message={notification} deleteContact={deleteContact} />
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
      <Persons persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
