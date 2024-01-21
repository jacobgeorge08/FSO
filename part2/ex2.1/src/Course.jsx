const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      <span>{part.name + " "}</span>
      <span>{part.exercises}</span>
    </p>
  );
};

const Content = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  const content = parts.map((p) => {
    return <Part key={p.id} part={p} />;
  });

  return (
    <>
      <div>{content}</div>
      <div>Total of {total} exercises</div>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
