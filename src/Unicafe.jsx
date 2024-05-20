import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const P = ({ value, text }) => (
  <p>
    {text} {value}
  </p>
);

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
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

      <h2>statistics</h2>
      <P
        text="good"
        value={good}
      />
      <P
        text="neutral"
        value={neutral}
      />
      <P
        text="bad"
        value={bad}
      />
    </>
  );
};

export default Unicafe;
