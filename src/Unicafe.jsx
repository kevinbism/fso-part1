import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad, total, average, positive }) => (
  <>
    <h2>statistics</h2>
    <Block
      text="good"
      value={good}
    />
    <Block
      text="neutral"
      value={neutral}
    />
    <Block
      text="bad"
      value={bad}
    />
    <Block
      text="all"
      value={total}
    />
    <Block
      text="average"
      value={average}
    />
    <p>positive {positive}%</p>
  </>
);

const Block = ({ value, text }) => (
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
    <>
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
        total={total}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default Unicafe;
