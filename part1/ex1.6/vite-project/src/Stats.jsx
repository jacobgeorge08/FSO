const StatsLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Stats = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const average = (good - bad) / total;

  if (good === 0 && bad === 0 && neutral == 0) {
    return (
      <div>
        <span>Statistics</span>
        <p>no feedback given yet</p>
      </div>
    );
  }
  return (
    <div>
      <span>Statistics</span>
      <StatsLine text="Good" value={good} />
      <StatsLine text="Neutral" value={neutral} />
      <StatsLine text="Bad" value={bad} />
      <StatsLine text="All" value={total} />
      <StatsLine text="Average" value={average} />
      <StatsLine text="Positive" value={(good / total) * 100 + "%"} />
    </div>
  );
};

export default Stats;
