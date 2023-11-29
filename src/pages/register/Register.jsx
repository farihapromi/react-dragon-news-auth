
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
const Register = () => {
  const{createUser} =useContext(AuthContext)
    const handleRegister=(e)=>{

        e.preventDefault();
      
        const email=e.target.email.value;
        const password=e.target.password.value;
        // const email=form.get('email');
        // const name=form.get('name');
        // const password=form.get('password');

       
        console.log(email,password);
        //create user
        createUser(email,password)
        .then(result=>{
          console.log(result.user)
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
      
      <form className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleRegister}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name"  name='name'
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" placeholder="Give your photo"  name='image'
          className="input input-bordered" required />
        </div>
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
         
           <input type="checkbox" name="terms" id="" />
           Accept Terms and Conditions
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='text-center mt-4'>Already  have an account?
       <Link className='text-red-500 font-bold' to='/login'>Login</Link></p>
      </div>
</div>

    );
};

export default Register;