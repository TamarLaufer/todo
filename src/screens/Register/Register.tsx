import { useState } from 'react'
import {useForm} from 'react-hook-form'

const Register = () => {
  const [state1, setState] = useState(false)
  return (
    <form onSubmit={()=>setState(true)}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  )
}

export default Register