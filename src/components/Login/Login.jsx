 
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProviderContext } from "../../Context/ContextProviders";
 
 

const Login = () => {
  // From ContextProviders.jsx
    const {signinUser,signInWithGoogle} = useContext(ProviderContext)
    const navigate = useNavigate()
    
    const handleLogIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        e.target.reset()
        navigate("/")

        // From cotextProvider.jsx
        signinUser(email,password)
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))
    }

    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result=>console.log(result.user))
      .catch(error =>console.log(error.message))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  ">
        <div className="text-center  ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New to moha milon? please<Link to={"/register"}><button className="btn btn-link">Register</button></Link></p>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
