import axios from 'axios';
import React from 'react';

export default function Landing() {
  interface SignUpFormState  {
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
  
}
