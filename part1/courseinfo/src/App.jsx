const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (porps) => {
  return (
    <p>
      {porps.part.name} {porps.part.exercises}
    </p>
  )
}

const Content = (porps) => {
  return (
    <div>
      <Part part={porps.course.parts[0]} />
      <Part part={porps.course.parts[1]} />
      <Part part={porps.course.parts[2]} />
    </div>
  )
}

const Total = (porps) => {
  return (
    <p>
      Number of exercises{" "}
      {porps.course.parts[0].exercises +
        porps.course.parts[1].exercises +
        porps.course.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
