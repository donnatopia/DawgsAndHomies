import React from 'react';

const Dog = ({ dog }) => {
  const { img, name, age, zip_code, breed } = dog;

  return (
    <>
      <img src={ img } />
      <h2>{ name }, { age }</h2>
      <h3>{ breed }</h3>
      <p>{ zip_code }</p>
    </>
  )
}

export default Dog;