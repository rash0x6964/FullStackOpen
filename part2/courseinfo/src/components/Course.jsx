const Header = ({ title }) => <h1>{title}</h1>

const Total = ({ parts }) => {
  let sum = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }, 0)

  return (
    <p>
      <b>total of exercises {sum}</b>
    </p>
  )
}

const Part = ({ part }) => {
  const { name, exercises, id } = part
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
    return (
      <>
        {parts.map((part) => {
          return <Part key={part.id} part={part} />
        })}
      </>
    )
  }

const Course = ({ course }) => {
    return (
      <>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

  export default Course
