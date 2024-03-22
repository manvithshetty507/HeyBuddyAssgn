import './style.css'
import logo from '../../../assets/twitter-logo-4 1.png'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login__container'>
        <div className="login__box">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <h1>Log in to Twitter</h1>

            <div className="input__container">
                <input type="text" placeholder='phone number, email address'/>
                <input type="password" placeholder='password'/>
            </div>

            <button>Log In</button>

            <div className="footer">
                <Link>Forgot password ?</Link>
                <Link to='/signup'>Sign up to twitter</Link>
            </div>
        </div>
    </div>
  )
}

export default Login