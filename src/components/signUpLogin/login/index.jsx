import './style.css'
import logo from '../../../assets/twitter-logo-4 1.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Login() {
    const [user, setuser] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        //can hanlde login here
        if(user && password) {
            //login
            console.log(user, password)
            alert("login success")
            setuser('')
            setPassword('')
        }
        else {
            //alert the user to enter details
            alert("Please enter details")
        }
    }

  return (
    <div className='login__container'>
        <div className="login__box">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <h1>Log in to Twitter</h1>

            <div className="input__container">
                <input type="text" 
                    placeholder='phone number, email address' 
                    value={user} 
                    onChange={e => setuser(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleLogin}>Log In</button>

            <div className="footer">
                <Link>Forgot password ?</Link>
                <Link to='/signup'>Sign up to twitter</Link>
            </div>
        </div>
    </div>
  )
}

export default Login