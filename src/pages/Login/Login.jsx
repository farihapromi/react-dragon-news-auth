import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
  const {signIn}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
          console.log(result.user)
          navigate(location?.state?location.state:'/');
        })
        .catch(error=>{
          console.log(error)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
          <div>
          <h3 className="text-3xl my-10 text-center">Login into Your Account</h3>
          
          <form className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email"  name='email'
              className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password"  name='password'
              className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center mt-4'>Don't have an account?
           <Link className='text-red-500 font-bold' to='/register'>Register</Link></p>
          </div>
    </div>
  
    );
};

export default Login;