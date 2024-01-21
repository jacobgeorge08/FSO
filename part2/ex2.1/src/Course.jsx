const Header = ({ courseName }) => {
  return <h2>{courseName}</h2>;
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
      <h4>Total of {total} exercises</h4>
    </>
  );
};

const Course = ({ courses }) => {
  const mappedCourses = courses.map((c) => {
    return (
      <div key={c.id}>
        <Header courseName={c.name} />
        <Content parts={c.parts} />
      </div>
    );
  });
  return <div>{mappedCourses}</div>;
};

export default Course;
