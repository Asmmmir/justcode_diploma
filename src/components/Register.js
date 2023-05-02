import axios from 'axios'
import React, { useRef, useState } from 'react'

const Register = () => {
    const [error,setError] = useState('')
    const [optional,setOptional] = useState(false)
    const [success,setSuccess] = useState(false)

   const login = useRef()
   const password = useRef()
   const password2 = useRef()
   const email = useRef()
   const phone = useRef()
   const fullName = useRef()


   const showOptional = (e) => {
    e.preventDefault()
    setOptional((prevState) => !prevState)
   }


const registerUser = async (e) => {
 
    try{
        e.preventDefault()
    const url = 'http://cepbep.ddns.net:2500/api/hotelDB/users/register'

    if(password.current.value !== password2.current.value) setError('Password was entered incorrectly')
    if( optional && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.current.value)){
      return  setError('Email is not correct')
    }
    if(optional && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.current.value)){
       return setError('Phone number is not correct')
    }
    if(login.current.value.trim().length <= 3){
      return  setError('Login is too short')
    }

    const data = {
    "login": login.current.value,
    "password": password.current.value,
    "tryPassword": password2.current.value,
    "email": email.current.value,
    "phoneHumber": phone.current.value,
    "fullName": fullName.current.value
    }

    const response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    setSuccess(true)
    }

    catch(err){
        console.log(err);
        setSuccess(false)
    }

}




  return (
<>
    {success ? 'You have registered successfully' : 
    
    (
        <div> <form  className="form-login">
    <label htmlFor='login'>Login</label>
    <input id='login' type="text" placeholder='Login' ref={login} />
    <label htmlFor='password'>Password</label>
    <input id='password' type="password" placeholder='Password' ref={password} />
    <label htmlFor='password2'>Confirm password</label>
    <input id='password2' type="password" placeholder='Confirm password' ref={password2}  />
      <div className={!optional ? `optional-info` : `optional-info show-optional`}>
      <label htmlFor='email'>Email</label>
    <input id='email' type="email" placeholder='Email' ref={email}  />
    <label htmlFor='phone'>Phone</label>
    <input id='phone' type="phone" placeholder='Phone' ref={phone} />
    <label htmlFor='fullName'>Full name</label>
    <input id='fullName' type="text" placeholder='Full name'  ref={fullName} />
      </div>
    <small style={{ color: "red" }}>{error}</small>
    <button onClick={registerUser} type="submit">Submit</button>
    <button onClick={showOptional}>Optional info</button>
  </form>
</div>)
    }
       </>
  )
}

export default Register