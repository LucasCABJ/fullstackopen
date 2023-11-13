import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} - {props.part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts.part1}/>
      <Part part={props.parts.part2}/>
      <Part part={props.parts.part3}/>
    </>
  )
}

const Total = (props) => {

  let total = 0

  for(let part in props.parts) {

    total += props.parts[part].exercises
  
  }

  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = {
    'part1': {
      'name': 'Fundamentals of React',
      'exercises': 10
    },
    'part2': {
      'name': 'Using props to pass data',
      'exercises': 7
    },
    'part3': {
      'name': 'State of a component',
      'exercises': 14
    }
  }


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))