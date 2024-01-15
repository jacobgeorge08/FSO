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
      <div>good {good}</div>
      <div>bad {bad}</div>
      <div>neutral {neutral}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {(good / total) * 100} %</div>
    </div>
  );
};

export default Stats;
