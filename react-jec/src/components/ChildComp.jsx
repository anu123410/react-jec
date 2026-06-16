import React from 'react'

const Childcomp = ({name , dept , age , place , ph}) => {
  return (
    <>
    <h1>Child Comp</h1>
    <h2>Name : {name}</h2>
    <h2>Department :{dept} </h2>
    <h2>Age :{age} </h2>
    <h2>Place : {place} </h2>
    <h2>Phone number: {ph} </h2>
    </>
  )
}

export default Childcomp