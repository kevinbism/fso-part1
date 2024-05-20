const Header = props => {
  return <h1>{props.title}</h1>;
};

const Content = props => {
  console.log(props);
  return props.parts.map((part, index) => (
    <Part
      key={index}
      part={part.name}
      exercise={part.exercises}
    />
  ));
};

const Part = props => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = props => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  // Trouble with the sum function
  function sum(n) {
    let result = 0;
    return result + n;
  }

  return (
    <div>
      <Header title={course.title} />
      <Content parts={course.parts} />
      <Total total={course.parts.map(part => sum(part.exercises))} />
    </div>
  );
};

export default App;
