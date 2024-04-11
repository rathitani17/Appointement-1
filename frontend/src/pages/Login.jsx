import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from "../../config.js";
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // axios.post('http://localhost:5000/api/v1/auth/login',formData)
    console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}`+'/auth/login',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      console.log(res);
      const data = await res.json();
      console.log(data);
      if(data.success===false){ 
        return
      }
      navigate('/');
    } catch (error) {
      console.log(
        "sign in fail"
      );
      
    }

    
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello!<span className="text-primaryColor">Welcome</span> Back
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleLogin}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer "
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer "
              required
            />
            </div>
          <div className="mt-7">
            <button type="submit" 
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px]
            rounded-lg px-4 py-3">Login</button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Don't have an Account?<Link to='/register' className="text-primaryColor font-medium ml-1">Register</Link>
            </p>

        </form>
      </div>
    </section>
  );
};

export default Login;
