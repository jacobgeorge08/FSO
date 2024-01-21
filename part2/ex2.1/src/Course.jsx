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
  console.log(parts);
  const content = parts.map((p) => {
    return <Part key={p.id} part={p} />;
  });
  console.log(content);
  return <div>{content}</div>;
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
