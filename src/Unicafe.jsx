import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <StatisticLine
          text="good"
          value={good}
        />
        <StatisticLine
          text="neutral"
          value={neutral}
        />
        <StatisticLine
          text="bad"
          value={bad}
        />
        <StatisticLine
          text="all"
          value={total}
        />
        <StatisticLine
          text="average"
          value={average}
        />
        <StatisticLine
          text="positive"
          value={positive + '%'}
        />
      </div>
    );
  }
};

const StatisticLine = ({ value, text }) => (
  <p>
    {text} {value}
  </p>
);

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    setGood(newGood);
    setTotal(newTotal);
    setPositive((newGood / newTotal) * 100);
    setAverage(calculateAverage(newGood, neutral, bad));
  };

  const handleNeutral = () => {
    const newTotal = total + 1;
    setNeutral(neutral + 1);
    setTotal(newTotal);
    setPositive((good / newTotal) * 100);
    setAverage(calculateAverage(good, neutral, bad));
  };

  const handleBad = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    setBad(newBad);
    setTotal(newTotal);
    setPositive((good / newTotal) * 100);
    setAverage(calculateAverage(good, neutral, newBad));
  };

  const calculateAverage = (good, neutral, bad) => {
    const totalFeedback = good - bad;
    const total = good + neutral + bad;
    const average = total !== 0 ? totalFeedback / total : 0;
    return average;
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        onClick={handleGood}
        text="good"
      />
      <Button
        onClick={handleNeutral}
        text="neutral"
      />
      <Button
        onClick={handleBad}
        text="bad"
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default Unicafe;
