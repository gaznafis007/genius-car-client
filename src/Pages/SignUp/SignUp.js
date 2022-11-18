import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { signUp, getProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signUp(email, password)
      .then((res) => {
        const user = res.user;
        getProfile(name).then(() => {
          console.log(user);
        });
        logOut().then(() => {
          navigate("/login");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-1/2  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account? login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
