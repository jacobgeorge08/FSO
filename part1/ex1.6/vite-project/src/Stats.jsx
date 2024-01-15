const StatsLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
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
    <table>
      <tbody>
        <tr>
          <td>Statistics</td>
        </tr>
        <StatsLine text="Good" value={good} />
        <StatsLine text="Neutral" value={neutral} />
        <StatsLine text="Bad" value={bad} />
        <StatsLine text="All" value={total} />
        <StatsLine text="Average" value={average} />
        <StatsLine text="Positive" value={(good / total) * 100 + "%"} />
      </tbody>
    </table>
  );
};

export default Stats;
