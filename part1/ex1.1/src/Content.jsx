import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part part={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part part={props.parts[2].name} ex={props.parts[2].exercises} />
    </div>
  );
};

export default Content;
