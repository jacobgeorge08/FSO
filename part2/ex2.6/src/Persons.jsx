const Persons = ({ persons, search, handleDelete }) => {
  let filteredPersons;
  if (!search) {
    filteredPersons = persons;
  } else {
    filteredPersons = persons.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  const mappedPersons = filteredPersons.map((p) => {
    return (
      <div key={p.id}>
        {p.name} : {p.number}{" "}
        <button onClick={() => handleDelete(p.id)}>delete</button>
      </div>
    );
  });
  return <>{mappedPersons}</>;
};

export default Persons;
