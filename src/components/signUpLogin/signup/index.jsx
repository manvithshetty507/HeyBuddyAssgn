import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import logo from '../../../assets/twitter-logo-4 1.png'
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

function SignUp() {
  const[user, setUser] = useState('')
  const [phone, setPhone] = useState('')

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleChangeDay = (date) => {
    setSelectedDay(date);
  };

  const handleChangeMonth = (date) => {
    setSelectedMonth(date);
  };

  const handleChangeYear = (date) => {
    setSelectedYear(date);
  };

  const handleSignup = () => {
    if(user && phone && selectedDay && selectedMonth  && selectedYear) {
      //handle signup
      setUser('')
      setPhone('')
      setSelectedDay('')
      setSelectedMonth('')
      setSelectedYear('')
      alert("SUCESS")
    }
    else {
      //alert to fill deatils
      alert("Fill all details")
    }
  }

  return (
    <div className='signup__box'>
      <div className="signup__container">

        <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        <h1>Create an account</h1>

        <div className="input__container">
          <input 
            type="text" 
            placeholder='Name' 
            name='email' 
            id='email' 
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='phone number' 
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <a href="#email">use email</a>

        <h3>Date of Birth</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto eveniet aliquam quidem, aperiam unde at nam voluptatum vitae obcaecati, odio alias quas. Corrupti nemo odio reprehenderit, hic sequi non?</p>
        <div className="date-picker-container">
          <div className="custom_datepicker day__container">
            <DatePicker
                selected={selectedDay}
                onChange={handleChangeDay}
                dateFormat="d"
                placeholderText="Day"
                className="date-picker"
            />
          </div>
          
          <div className="custom_datepicker month__container">
            <DatePicker
                selected={selectedMonth}
                onChange={handleChangeMonth}
                dateFormat="MM"
                placeholderText="Month"
                className="date-picker"
            />
            
          </div>

          <div className="custom_datepicker year__container">
            <DatePicker
                selected={selectedYear}
                onChange={handleChangeYear}
                dateFormat="yyyy"
                placeholderText="Year"
                showYearDropdown
                scrollableYearDropdown
                className="date-picker"
            />
            
          </div>
        </div>

        <button className='signup__button' onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
}

export default SignUp;
