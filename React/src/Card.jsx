import React from 'react'

function New(props) {
  console.log(props);
  const { name, age, city } = props.user;
  return (
    <div>
      <h1>Hello I am {name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  )
}

export default New