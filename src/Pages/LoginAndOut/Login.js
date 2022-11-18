import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setToken } from "../../api/token";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setToken(user);
        navigate(from, { replace: true });

        // const userMail = {
        //   email: user.email,
        // };
        // fetch("https://genius-car-server-rho-tawny.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(userMail),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     localStorage.setItem("geniusToken", data.token);
        //     navigate(from, { replace: true });
        //   });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-1/2  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                <Link to="/signup" className="label-text-alt link link-hover">
                  New to our site? sign up
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

export default Login;
