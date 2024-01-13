const Stats = ({ good, bad, neutral }) => {
  return (
    <div>
      <span>Statistics</span>
      <div>good {good}</div>
      <div>bad {bad}</div>
      <div>neutral {neutral}</div>
    </div>
  );
};

export default Stats;
