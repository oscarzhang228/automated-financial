import axios from 'axios';
import React, { useState } from 'react';
export default function Landing() {
  type SignUpFormState = {
    firstname: string;
    lastname: string;
    email: string;
    password: string
  }
  
  const [formData, setFormData] = useState<SignUpFormState> ({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/apiv1/signup', formData);
      console.log(response);
    }catch (error) {
      console.error(error);
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }
  return <div className ="landing-page">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <br />
          <input type = "text" name = "firstname" id = "first" onChange={handleChange}value={formData.firstname} required maxLength={20}/>
          <br />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <br />
          <input type = "text" name = "lastname" id = "last" onChange={handleChange}value={formData.lastname} required maxLength={20}/>
          <br />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type = "email" name = "email" id = "email" onChange={handleChange}value={formData.email} required maxLength={40}/>
          <br />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input type = "password" name = "password" id = "password" onChange={handleChange}value={formData.password} required maxLength={15}/>
          <br />
        </div>

        <button>Sign Up</button>

      </form>
    </div>
  }
