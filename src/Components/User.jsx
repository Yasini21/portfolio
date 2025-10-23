import React from 'react'

const User = ({name,department,skills}) => {
  return (
    <div>
        <h1>I am {name} from {department}.</h1>
        <ul>
            {skills.map((one)=>(
                <li>{one}</li>
            ))}
        </ul>

    </div>
  )
}

export default User