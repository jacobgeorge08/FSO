const Filter = ({ text, handleFilter }) => {
  return (
    <div>
      {text}
      <input onChange={handleFilter} />
    </div>
  );
};
export default Filter;
