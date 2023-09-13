import { useState } from "react"

const Buttons = (props) => {
  const { good, neutral, bad } = props.infos
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={good.fun}>good</button>
      <button onClick={neutral.fun}>neutral</button>
      <button onClick={bad.fun}>bad</button>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props.infos

  if (good.state == 0 && bad.state == 0 && neutral.state == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good.state} />
            <StatisticLine text="neutral" value={neutral.state} />
            <StatisticLine text="bad" value={bad.state} />
            <StatisticLine
              text="all"
              value={good.state + neutral.state + bad.state}
            />
            <StatisticLine text="average" value={0} />
            <StatisticLine text="positive" value={0} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const infos = {
    good: {
      state: good,
      fun: () => setGood(good + 1),
    },
    neutral: {
      state: neutral,
      fun: () => setNeutral(neutral + 1),
    },
    bad: {
      state: bad,
      fun: () => setBad(bad + 1),
    },
  }

  return (
    <>
      <Buttons infos={infos} />
      <Statistics infos={infos} />
    </>
  )
}

export default App
