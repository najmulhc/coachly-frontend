import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-accent">Login</h1>
      <form onSubmit={login} className="w-full">
        <div className="w-full form-control relative">
          <label htmlFor="email" className="">
            <input
              type="email"
              name="email"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-lg px-2 outline-none w-full my-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
            />
            <span className="input-email text-lg absolute left-4 top-[30px] mx-0 text-primary transition-all duration-200 ">
              Email
            </span>
          </label>
          <label className="label">
            <span className="label-text-alt mt-[-20px] text-red-700">this is not a valid email</span> 
          </label>
        </div>
        <label htmlFor="password" className="relative">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className="h-12 text-lg px-2 outline-none w-full my-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
          />
          <span className="input-password text-lg absolute left-4 top-0 mx-0 text-primary transition-all duration-200 ">
            Password
          </span>
        </label>
        <button className="btn btn-primary mx-auto" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};
export default Login;
