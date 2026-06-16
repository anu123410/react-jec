import React from 'react'
import Childcomp from './Childcomp'

const ParentComp = () => {
  return (
    <>
    <h1>College details</h1>
    <Childcomp name = "Anugraha" dept = "CSE" age="19" place="kunnamkulam" ph="7592977331"></Childcomp>
    </>
  )
}

export default ParentComp